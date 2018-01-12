<?php include("settings.php");
session_start(); ?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");
?>
<link href="../css/snow.css" rel="stylesheet">
<?
$id =  $_GET["id"];
if (isset($_GET['erase']))
    {
$erase = $_GET['erase'];
			Book::queryMysql("DELETE FROM chapter WHERE id=$erase");
			echo "<script>window.location.href='editchapters.php?id=" . $id . "'</script>";

    }
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
        echo("<a class='admin-container__chapter-link' onclick='visible(this)'>$nameChapter (редактировать)</a>"); ?>
        <a data-book ='<? echo $id; ?>' data-chapter ='<? echo $idChapter; ?>'class="del del--special" onclick="deleteChapter(this)">Удалить</a>
      <?  echo("<div class='hidden'>
         <p>Редактировать название главы №$j</p>
        <input class='admin-container__input-text admin-container__input-text--center' type='text' name='chapter-name' value='$nameChapter'>
         </div>");
         echo("<div class='hidden'>
          <p>Редактировать текст главы №$j</p>
          <div id='editor$j' class='quilhelper'>
            <p>$textChapter</p>
          </div>

          </div>");
      			echo("<button onclick='update_chapter(this,$j)' class='btn hidden' data-id='$idChapter'>Обновить</button>");
            echo "<p id='infoUpdate".$j."'></p>";
      echo("</div>");

    }
    echo("<div class='admin-container__row'>
     <button onclick='visibleAddChapter()' class='btn admin-container__input-text--center' data-id='$idBook'>Добавить новую главу</button>
     </div>");
    echo("<div class='admin_container__wrapper hidden' id='addNewChapterWrapper'>");
   echo("<div >
   <p>название главы</p>
   <input class='admin-container__input-text admin-container__input-text--center' type='text' name='chapter-name'>
   </div>");
   echo("<div>
   <p>текст главы</p>
   <div id='editornew'>
     <p></p>
   </div>
   </div>");
    echo("<button  class='btn' onclick='add_chapter(this)' data-id='$id'>Добавить</button>");
   echo("</div>");
    ?>
    </div>
    <p id="info"></p>
  </div>
</div>
<div class="modal-content modal-content--close">
	<p>Вы действительно хотите удалить главу?</p>
  <a class="modal-content__close" onclick='closeModalContent(this)'>Отменить</a>
  <a href="#" class="btn-uniq"></a>
</div>
<div class="modal-overlay"></div>
<!-- <div class="modal-content modal-content--close">
	<h2 class="modal-content__title">Вставка изображения</h2>
	<div class="file_upload btn">
							 Выбрать
							 <input name="picture-book" type="file" />
						 </div>
			 <input type="text" placeholder="Picture url">
			 <button class="btn">Вставить</button>
</div> -->

<!-- Include the Quill library -->
<script src="../js/quil.min.js"></script>

<!-- Initialize Quill editor -->
<script>

//vanilla
var arrayIdsEditChapter = [].map.call(document.querySelectorAll('.quilhelper[id]'), function(el) {
  return el.id;
});



var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['video'],
  ['image'],
  ['clean']                                         // remove formatting button
];
for (let i=0; i<arrayIdsEditChapter.length; i++) {
  var quill = new Quill('#editor'+(i+1), {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
}


var quill = new Quill('#editornew', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});
</script>
<?php include("footer_admin.php"); ?>
<?}
else {
    require( "login.php" );
} ?>
