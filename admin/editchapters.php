<?php include("header_admin.php"); ?>
<?
$id =  $_GET["id"];
$chapterQuery = "SELECT `name`, `text`,`id` FROM `chapter` WHERE `book_id`=$id";
$chapters = Book::queryMysql($chapterQuery);
?>
<div class="admin-container">
  <div class="admin-container__items">
    <div class="admin-container__item">
      <?$j=0;
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
    echo("<button  class='btn' onclick='add_chapter(this)' data-id='$id'>Добавить</button>");
   echo("</div>");
    ?>
    </div>
    <p id="info"></p>
  </div>
</div>
<?php include("footer_admin.php"); ?>
