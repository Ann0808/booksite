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
  // public function __construct($name, $logoMobile, $logoDesktop, $logoBook, $author, $link)
  // {
  //   $this->name = $name;
  //   $this->logoMobile = $logoMobile;
  //   $this->logoDesktop = $logoDesktop;
  //   $this->logoBook = $logoBook;
  //   $this->author = $author;
  //   $this->link = $link;
  // }
  public function __construct($data, $files)
  {
    $path = '../img/';
    $ext = array_pop(explode('.',$files['picture-mobile']['name']));
    $this->link = $data['book-link'];
    // $new_mobile_logo_name = $path . 'mobile-logo-'. $link . '.' . $ext;
    // $new_desktop_logo_name = $path . 'desktop-logo-'. $link . '.' . $ext;
    // $new_book_logo_name = $path . 'book-logo-'. $link . '.' . $ext;
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

  public static function queryMysql($query)
    {
      global $mysqli;
      $result = $mysqli->query($query);
      if (!$result) die($mysqli->error);
    //   if ($result->num_rows)
    // {
    //   $row = $result->fetch_array(MYSQLI_ASSOC);
    //
    // }

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
      $id=$ids['id'];
      $chapterQuery = "SELECT `name`, `text`,`id` FROM `chapter` WHERE `book_id`=$id";
      $chapters = Book::queryMysql($chapterQuery);
      if(count($ids)>0) {
        echo("<div class='admin-container__row'>
         <p>Редактировать имя</p>
        <input class='admin-container__input-text' type='text' name='book-name' value='$name'>
         </div>");

         echo("<div class='admin-container__row'>
          <p>Редактировать автора</p>
         <input class='admin-container__input-text' type='text' name='author-name' value='$author_name'>
          </div>");

          echo("<div class='admin-container__row'>
           <p>Редактировать ссылку</p>
          <input class='admin-container__input-text' type='text' name='link' value='$link'>
           </div>");
      }

$j=0;
    while($row=$chapters->fetch_array(MYSQLI_ASSOC))
{
  $j++;
	$idChapter=$row['id'];
  $nameChapter=$row['name'];
  $textChapter=$row['text'];
			echo("<div class='admin_container__wrapper'>");
  echo("<a class='admin-container__chapter-link' onclick='visible(this)'>$nameChapter</a><br>");
  echo("<div class='hidden'>
   <p>Редактировать название главы №$j</p>
  <input class='admin-container__input-text admin-container__input-text--center' type='text' name='chapter-name' value='$nameChapter'>
   </div>");
   echo("<div class='hidden'>
    <p>Редактировать текст главы №$j</p>
   <textarea class='admin-container__input-text admin-container__input-text--center' rows='8' cols='80' name='chapter-text' >$textChapter</textarea>
    </div>");
			echo("<button onclick='update_chapter(this)' class='btn hidden' data-id='$idChapter' data-name='$nameChapter' data-text='$textChapter'>Обновить</button>");
echo("</div>");
//echo '<p>Запись id='..'. Текст: '.$row['text'].'</p>';// выводим данные

}


//
//    $chapters = Book::queryMysql($chapterQuery);
//    foreach ($chapters as $value) {
//
//     foreach ($value as $v) {
//      echo("<div class='admin-container__row'>
//       <p>Редактировать главу</p>
//      <input class='admin-container__input-text' type='text' name='book-name' value='$v'>
//       </div>");
//   }
// }
  }
}


 ?>
