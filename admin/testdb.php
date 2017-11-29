<!DOCTYPE html>
<?php require( "../config.php" );
$dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
 ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>Admin panel</title>
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <div class="admin-container">
    	<h1 class="admin-title">Welcome to admin panel</h1>
			<a class="btn" href="../index.php">Перейти на главную</a>
			<a class="btn" href="admin.php?action=logout"?>Выйти</a>
    </div>
    <div class="admin-container">
    <ul class="admin-menu">
    	<li class="admin-menu__item admin-menu__item--active"><a href="" class="btn">Добавить книгу</a></li>
    	<li class="admin-menu__item"><a href="" class="btn">Изменить существующую книгу</a></li>
    </ul>
    <div class="admin-container__item admin-container__item--active">
    	<form enctype="multipart/form-data" method="post" action="testdb.php">
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
					<p>Ссылка на книгу</p>
					<input class="admin-container__input-text" type="text" name="book-name" id="" placeholder="/book-name">
				</div>
				<div class="admin-container__row">
					<input class="btn" type="submit" value="Отправить данные" name="submit"/>
					<p>
						<?php
							$path = '../img/';
							$types = array('image/gif', 'image/png', 'image/jpeg');
							if ($_SERVER['REQUEST_METHOD'] == 'POST')
							{
								$ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
								// Проверяем тип файла
							if (!in_array($_FILES['picture-mobile']['type'], $types)){
								 die('Запрещённый тип файла. <a href="?">Попробовать другой файл?</a>');
							}
							 if (!@copy($_FILES['picture-mobile']['tmp_name'], $path . 'mobile-logo.' . $ext))
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
  </body>
</html>





<?php


function queryMysql($query)
  {
    global $mysqli;
    $result = $mysqli->query($query);
    if (!$result) die($mysqli->error);
    return $result;
  }
  ?>

<?php
 if(isset($_POST['submit'])) {
   $name=$_POST['book-name'];
   $logo1=$_FILES['picture-mobile']['name'];
   $logo2=$_FILES['picture-desktop']['name'];
   $img=$_FILES['picture-book']['name'];
   queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desc`, `image`) VALUES ('$name','$logo1','$logo2','$img')");
 }


 ?>
