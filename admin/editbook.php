<?php include("settings.php");
session_start();
?>
    <?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
        <?php include("header_admin.php");
	require_once"picture.php"; ?>
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
$price=$books['price'];
$checked=$books['admin'];

?>
                <div class="admin-container--special">
                    <form action="editbook.php?id=<?echo $id; ?>" id='form-update-book' enctype='multipart/form-data' method='post'>

                        <div class="admin-container__block">
                            <span class="admin-container__addition">Все изображения должны быть в формате jpeg</span>
                            <div class='admin-container__row'>
                                <p>Редактировать логотип для мобильной версии</p>
                                <div class='file_upload btn'>
                                    Выбрать
                                    <input name='picture-mobile' type='file' id='logomob' />
                                </div>
                            </div>
                            <div class='admin-container__row'>
                                <p>Редактировать логотип для десктопной версии</p>
                                <div class='file_upload btn'>
                                    Выбрать
                                    <input name='picture-desktop' type='file' id='logodesk' />
                                </div>
                            </div>
                            <div class='admin-container__row'>
                                <p>Редактировать обложку
                                    <br><span class="admin-container__addition">Изображение должно быть высотой более 400px и в вертикальной ориентации</span></p>
                                <div class='file_upload btn'>
                                    Выбрать
                                    <input name='picture-book' type='file' id='imgbook' />
                                </div>
                            </div>
                        </div>
                        <div class="admin-container__block">
                            <div class='admin-container__row'>
                                <p>Редактировать имя </p>
                                <input class='admin-container__input-text' type='text' name='book-name' id='book-name-new' value='<?echo($name);?>'>
                            </div>
                            <div class='admin-container__row'>
                                <p>Редактировать автора</p>
                                <input id='author-name' class='admin-container__input-text' type='text' name='book-author' value='<?echo $author_name;?>'>
                            </div>

                            <div class='admin-container__row'>
                                <p>Редактировать ссылку</p>
                                <input id='book-link' class='admin-container__input-text' type='text' name='book-link' value='<?echo $link;?>'>
                            </div>
                            <div class='admin-container__row'>
                                <p>Редактировать цену в рублях</p>
                                <input id='book-price' class='admin-container__input-text' type="number" step="1" min="0" max="1000000" name='book-price' value='<?echo $price;?>'>
                            </div>
                            <div class="admin-container__row margin-bottom">
                                <label class="checkbox">Вы автор книги
                                    <input type="checkbox" name="book-is-admin" <?php if($checked) echo "checked"; ?>><span class="checkbox-indicator"></span></label>
                            </div>
                        </div>
                        <input name="book-id" type="hidden" value='<?echo $id;?>'>
                        <input type='submit' class='btn hidden' name='UpdateBookButton' value='Применить изменения'>
                    </form>

                    <?
if(isset($_POST['UpdateBookButton'])){

$book = new Book($_POST,$_FILES);
 if (!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile)){
   echo 'Логотип для мобильной версии не обновлен '; ?>
                        <br>
                        <? }
 if(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop)) {
   echo 'Логотип для десктопрой версии не обновлен'; ?>
                            <br>
                            <? }
 if(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook)) {
   echo 'Миниатюра не обновлена'; ?>
                                <br>
                                <? }
 $book->update();
 $logo= $book->logoBook;
if($logo!=null){
	picture_book($book->logoBook);
}

 ?>

                                    <script>
                                        if (document.URL.indexOf("#") == -1) { //Check if the current URL contains '#'
                                            url = document.URL + "#"; // use "#". Add hash to URL
                                            location = "#";
                                            location.reload(true); //Reload the page
                                        }
                                    </script>
                                    <?echo 'Книга отредактирована';
   }
?>

                </div>

                <?php include("footer_admin.php"); ?>
                    <?}
else {
    require( "login.php" );
} ?>
