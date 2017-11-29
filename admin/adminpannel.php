<!DOCTYPE html>
<?php
 //require( "../config.php" );
 $dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
 function queryMysql($query)
   {
     global $mysqli;
     $result = $mysqli->query($query);
     if (!$result) die($mysqli->error);
     return $result;
   }
   if(isset($_POST['submit'])) {
     $name=$_POST['book-name'];
     $logo1=$_FILES['picture-mobile']['name'];
     $logo2=$_FILES['picture-desktop']['name'];
     $img=$_FILES['picture-book']['name'];
     $author=$_POST['book-author'];
     queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`) VALUES ('$name','$logo1','$logo2','$img','$author')");
   }
 ?>

<html>
  <head>
    <meta charset="utf-8">
    <title>Admin panel</title>
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <div class="admin-container">
    	<h1 class="admin-title">Добро пожаловать, Администратор</h1>
			<a class="btn" href="../index.php">Перейти на главную</a>
			<a class="btn" href="admin.php?action=logout"?>Выйти</a>
    </div>
    <div class="admin-container">
    <input type="radio" name="menu-item" id="reviews-input-1" checked>
    <input type="radio" name="menu-item" id="reviews-input-2">
    <div class="admin-menu">
        <label class="admin-menu__item btn" for="reviews-input-1">Добавить книгу</label>
        <label class="admin-menu__item btn" for="reviews-input-2">Изменить существующую книгу</label>
    </div>
    <div class="admin-container__items">
    	<div class="admin-container__item">
				<form enctype="multipart/form-data" method="post" action="admin.php">
					<div class="admin-container__row">
					<p>Логотип для мобильной версии</p>
						<div class="file_upload btn">
							Выбрать
							<input placeholder="mobile" name="picture-mobile" type="file" />
						</div>
					</div>
					<div class="admin-container__row">
						<p>Логотип для десктопной версии</p>
						<div class="file_upload btn">
							Выбрать
							<input name="picture-desktop" type="file" />
						</div>
					</div>
					<div class="admin-container__row">
						<p>Книжная обложка</p>
						<div class="file_upload btn">
							Выбрать
							<input name="picture-book" type="file" />
						</div>
					</div>
					<div class="admin-container__row">
						<p>Название книги</p>
						<input class="admin-container__input-text" type="text" name="book-name" id="" placeholder="Война и мир">
					</div>
          <div class="admin-container__row">
						<p>Автор книги</p>
						<input class="admin-container__input-text" type="text" name="book-author" id="" placeholder="Вася Пупкин">
					</div>
					<div class="admin-container__row">
						<p>Ссылка на книгу</p>
						<input class="admin-container__input-text" type="text" name="book-link" id="" placeholder="/book-name">
					</div>
					<div class="admin-container__row">
						<input class="btn" type="submit" value="Отправить данные"  name="submit"/>
						<p>
							<?php
								$path = '../img/';
								$types = array('image/jpeg'); //only jpg
                echo("");
								if ($_SERVER['REQUEST_METHOD'] == 'POST')
								{
									$ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
									// Проверяем тип файла
								if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
									 die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
								}
								 if ((!@copy($_FILES['picture-mobile']['tmp_name'], $path . 'mobile-logo.' . $ext))||(!@copy($_FILES['picture-desktop']['tmp_name'], $path . 'desktop-logo.' . $ext))||(!@copy($_FILES['picture-book']['tmp_name'], $path . 'book-logo.' . $ext)))
									echo 'Что-то пошло не так';
								 else
									echo 'Загрузка удачна';
								}
							?>
						</p>
					</div>
				</form>
			</div>
			<div class="admin-container__item">
			<form enctype="multipart/form-data" method="post">
					<div class="admin-container__row">
						<p>Название книги</p>
						<input class="admin-container__input-text" type="text" name="book-name" id="" placeholder="Война и мир">
					</div>
					<div class="admin-container__row">
						<input class="btn" type="submit" value="Найти" />
						<p>
							<?php
								/*search result*/
							?>
						</p>
					</div>
				</form>
			</div>
    </div>

    </div>
  </body>
</html>
