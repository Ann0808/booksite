<?php
/**
 *
 */
class Book
{
   public $id = null;
   public $name = null;
   public $logoMobile = null;
   public $logoDesktop = null;
   public $logoBook = null;
   public $author = null;
   public $link = null;

  public function __construct($data, $files)
  {
    $path = '../img/';
     //$ext = array_pop(explode('.',$files['picture-mobile']['name']));
    $ext = "jpg";
    $this->link = $data['book-link'];
    $this->name = $data['book-name'];
    $this->logoMobile = $path . 'mobile-logo-'. $this->link . '.' . $ext;
    $this->logoDesktop = $path . 'desktop-logo-'. $this->link . '.' . $ext;
    $this->logoBook = $path . 'book-logo-'. $this->link . '.' . $ext;
    $this->author = $data['book-author'];
  }

  public function insert() {
    $insertQuery = "INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$this->name','$this->logoMobile','$this->logoDesktop','$this->logoBook','$this->author','$this->link')";
     Book::queryMysql($insertQuery);
  }

  public function update() {
    $insertQuery = "UPDATE `books` SET `name`='$this->name', `logo-mob`='$this->logoMobile', `logo-desk`='$this->logoDesktop', `image`='$this->logoBook',`author_name`='$this->author',`link`='$this->link')";
     Book::queryMysql($insertQuery);
  }



  public static function queryMysql($query)
    {
      global $mysqli;
      $result = $mysqli->query($query);
      if (!$result) die($mysqli->error);
      return $result;
    }

    public static function findBook($postName) {
      $name=$postName['book-name'];
      $findQuery = "SELECT `id`,`link`,`author_name`,`name` FROM `books` WHERE `name`='$name'";
      $i=0;
      $ids = Book::queryMysql($findQuery);
      if ($ids->num_rows)
     {
       $ids = $ids->fetch_array(MYSQLI_ASSOC);

     }
      $author_name=$ids['author_name'];
      $link=$ids['link'];
      $idBook=$ids['id'];
      $chapterQuery = "SELECT `name`, `text`,`id` FROM `chapter` WHERE `book_id`=$idBook";
      $chapters = Book::queryMysql($chapterQuery);










      if(count($ids)>0) {
        echo "<form action='admin.php' id='form-update-book' onsubmit='update_book(event,this)'>";
        echo("<div class='admin-container__row'>
         <p>Редактировать имя</p>
        <input class='admin-container__input-text' type='text' name='book-name' id='book-name' value='$name'>
         </div>");
         echo("<div class='admin-container__row'>
         <p>Редактировать Логотип для mob версии</p>
         <div class='file_upload btn'>
           Выбрать
           <input name='picture-mobile' type='file' />
         </div>
          </div>");
          echo("<div class='admin-container__row'>
          <p>Редактировать Логотип для desk версии</p>
          <div class='file_upload btn'>
            Выбрать
            <input name='picture-desktop' type='file' />
          </div>
           </div>");
           echo("<div class='admin-container__row'>
           <p>Редактировать mini</p>
           <div class='file_upload btn'>
             Выбрать
             <input name='picture-book' type='file' />
           </div>
            </div>");


         echo("<div class='admin-container__row'>
          <p>Редактировать автора</p>
         <input id='author-name' class='admin-container__input-text' type='text' name='author-name' value='$author_name'>
          </div>");

          echo("<div class='admin-container__row'>
           <p>Редактировать ссылку</p>
          <input id='book-link' class='admin-container__input-text' type='text' name='link' value='$link'>
           </div>");
    	echo("<input type='submit'  class='btn hidden' data-id='$idBook' id='onUpdateBookButton' name='UpdateBookButton' value='Применить изменения'>");
      echo "</form>";
      //onclick='update_book(this,event)'
      }

$j=0;
    while($row=$chapters->fetch_array(MYSQLI_ASSOC))
{
  $j++;
	$idChapter=$row['id'];
  $nameChapter=$row['name'];
  $textChapter=$row['text'];
			echo("<div class='admin_container__wrapper' id='chp-$idChapter'>");
  echo("<a class='admin-container__chapter-link' onclick='visible(this)'>$nameChapter</a>");
  echo("<div class='hidden'>
   <p>Редактировать название главы №$j</p>
  <input class='admin-container__input-text admin-container__input-text--center' type='text' name='chapter-name' value='$nameChapter'>
   </div>");
   echo("<div class='hidden'>
    <p>Редактировать текст главы №$j</p>
   <textarea class='admin-container__input-text admin-container__input-text--center' rows='8' cols='80' name='chapter-text' >$textChapter</textarea>
    </div>");
			echo("<button onclick='update_chapter(this)' class='btn hidden' data-id='$idChapter'>Обновить</button>");
echo("</div>");

}
echo("<div class='admin-container__row admin-container__row--central'>
 <button onclick='visibleAddChapter()' class='btn admin-container__input-text--center' data-id='$idBook'>Добавить новую главу</button>
 </div>");

 echo("<div class='admin_container__wrapper hidden' id='addNewChapterWrapper'>");
echo("<div >
<p>название главы</p>
<input class='admin-container__input-text admin-container__input-text--center' type='text' name='chapter-name'>
</div>");
echo("<div>
<p>текст главы</p>
<textarea class='admin-container__input-text admin-container__input-text--center' rows='8' cols='80' name='chapter-text' ></textarea>
</div>");
 echo("<button  class='btn' onclick='add_chapter(this)' data-id='$idBook'>Добавить</button>");
echo("</div>");

  }
}
 ?>
