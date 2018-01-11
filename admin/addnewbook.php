<?php include("settings.php");
session_start(); ?>
    <?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
        <?php include("header_admin.php");

?>
<style>
.progress{
  width: 500px;
  height: 45px;
border: 1px solid black;
}
.progress > div{
  width: 0px;
  height: 45px;
  position: relative;
  background-color: green;
}
</style>

            <div class="admin-container--special">

                <form enctype="multipart/form-data" method="post" action="addnewbook.php" id="formupload">
                    <div class="admin-container__block">
                        <span class="admin-container__addition">Все изображения должны быть в формате jpeg</span>
                        <div class="admin-container__row">
                            <p>Логотип для мобильной версии
                            <br><span class="admin-container__addition">Изображение должно быть в горизонтальной ориентации. </span></p>

                            <div class="file_upload btn">
                                Выбрать
                                <input placeholder="mobile" name="picture-mobile" type="file" />
                            </div>
                        </div>
                        <div class="admin-container__row">
                            <p>Логотип для десктопной версии
                              <br><span class="admin-container__addition">Изображение должно быть в горизонтальной ориентации.</span></p>

                            <div class="file_upload btn">
                                Выбрать
                                <input name="picture-desktop" type="file" />
                            </div>
                        </div>
                        <div class="admin-container__row">
                            <p>Книжная обложка
                                <br><span class="admin-container__addition">Изображение должно быть высотой более 400px и в вертикальной ориентации. Желательное соотношение сторон 1:1.6 (ширина:длина).</span></p>
                            <div class="file_upload btn">
                                Выбрать
                                <input name="picture-book" type="file" />
                            </div>
                        </div>
                    </div>
                    <div class="admin-container__block">
                        <div class="admin-container__row">
                            <p>Название книги</p>
                            <input class="admin-container__input-text" type="text" name="book-name" id="" placeholder="Война и мир">
                        </div>
                        <div class="admin-container__row">
                            <p>Автор книги</p>
                            <input class="admin-container__input-text" type="text" name="book-author" id="" placeholder="Вася Пупкин">
                        </div>

                        <div class="admin-container__row">
                            <p>Ссылка на книгу<br><span class="admin-container__addition">Только латинские символы, дефис и нижнее подчеркивание</span></p>
                            <input class="admin-container__input-text" type="text" name="book-link" id="" placeholder="book-name">
                        </div>
                        <div class="admin-container__row">
                            <p>Цена книги в рублях</p>
                            <input class="admin-container__input-text" type="number" step="1" min="0" max="1000000" name="book-price" id="" placeholder="50">
                        </div>
                        <div class="admin-container__row">
                            <label class="checkbox">Вы автор книги
                                <input type="checkbox" name="book-is-admin" value="a1"><span class="checkbox-indicator"></span></label>
                        </div>
                    </div>
                    <div class="admin-container__row">
                        <input class="btn btn--margin" type="submit" value="Отправить данные" name="submit"  >
                        <div class="progress">
    <div></div>
  </div>
                        <p>
                            <?php
								 //$path = '../img/';

								 $types = array('image/jpeg'); //only jpg
								 echo("");
								//  if (($_SERVER['REQUEST_METHOD'] == 'POST')&&(isset($_POST['submit'])))
								//  {?>
                    <script type="text/javascript">
                //    $(document).ready(function() {
                //    $('.btn--margin').removeAttr('disabled');
                //    });
                //    </script>
								 <?	 //$name=$_POST['book-name'];
								// 	 //$link=$_POST['book-link'];
								// 	 $ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
								// 	 // Проверяем тип файла
								//  if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
								// 		die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
								//  }
                //
								//  $book = new Book($_POST,$_FILES);
								// 	if ((!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile))||(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop))||(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook))) {
								// 		echo 'Что-то пошло не так';
								// 	}
								// 	else {
                //
								// 		$book->insert();
								// 		//queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$name','$logo1','$logo2','$img','$author','$link')");
								// 		picture_book($book->logoBook);
                //
								// 		echo 'Загрузка удачна';
								// 	}
                //
							//  }
							 ?>
                        </p>
                        <p id="info"></p>
                    </div>
                </form>
            </div>


            <script type="text/javascript" src="../js/editAddBook.js">

            </script>
            <?php include("footer_admin.php"); ?>
                <?}
else {
    require( "login.php" );
} ?>
