<?php require_once( "../config.php" );
session_start(); ?>
<?php if ( $_SESSION['adminname'] == ADMIN_USERNAME) { ?>
<?php include("header_admin.php"); ?>
<?
$id =  $_GET["id"];
$editQuery = "SELECT * FROM `books` WHERE `id`='$id'";
$books = Book::queryMysql($editQuery);
if ($books->num_rows)
{
 $books = $books->fetch_array(MYSQLI_ASSOC);

}
$name=$books['name'];
$author_name=$books['author_name'];
$link=$books['link'];

?>
<div class="admin-container">
  <div class="admin-container__items">
    <div class="admin-container__item">
      <form action="editbook.php?id=<?echo $id; ?>" id='form-update-book' enctype='multipart/form-data' method='post' >
      <div class='admin-container__row'>
         <p>Редактировать имя </p>
        <input class='admin-container__input-text' type='text' name='book-name' id='book-name-new' value='<?echo($name);?>'>
         </div>
      <div class='admin-container__row'>
         <p>Редактировать Логотип для mob версии</p>
         <div class='file_upload btn'>
           Выбрать
           <input name='picture-mobile' type='file' id='logomob'/>
         </div>
          </div>
        <div class='admin-container__row'>
          <p>Редактировать Логотип для desk версии</p>
          <div class='file_upload btn'>
            Выбрать
            <input name='picture-desktop' type='file' id='logodesk'/>
          </div>
           </div>
           <div class='admin-container__row'>
           <p>Редактировать mini</p>
           <div class='file_upload btn'>
             Выбрать
             <input name='picture-book' type='file' id='imgbook'/>
           </div>
            </div>


        <div class='admin-container__row'>
          <p>Редактировать автора</p>
         <input id='author-name' class='admin-container__input-text' type='text' name='book-author' value='<?echo $author_name;?>'>
          </div>

        <div class='admin-container__row'>
           <p>Редактировать ссылку</p>
          <input id='book-link' class='admin-container__input-text' type='text' name='book-link' value='<?echo $link;?>'>
           </div>
           <input name="book-id" type="hidden" value='<?echo $id;?>'>
      <input type='submit'  class='btn hidden' name='UpdateBookButton' value='Применить изменения'>
      </form>

<?
if(isset($_POST['UpdateBookButton'])){

 //echo("ok");

 // $ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
  // Проверяем тип файла
// if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
//    die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
// }

$book = new Book($_POST,$_FILES);
 if (!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile)){
   echo 'Логотип для мобильной версии не обновлен '; ?> <br>
<? }
 if(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop)) {
   echo 'Логотип для десктопрой версии не обновлен'; ?> <br>
 <? }
 if(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook)) {
   echo 'Миниатюра не обновлена'; ?> <br>
 <? }
 $book->update(); ?>

<script>
    if(document.URL.indexOf("#")==-1){ //Check if the current URL contains '#'
        url = document.URL+"#"; // use "#". Add hash to URL
        location = "#";
        location.reload(true); //Reload the page
    }
</script>
 <?echo 'Книга отредактирована';
   }
?>

    </div>
    </div>
    </div>


}

<?php include("footer_admin.php"); ?>
<?}
else {
    require( "login.php" );
} ?>
