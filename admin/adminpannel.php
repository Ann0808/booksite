<!DOCTYPE html>
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
    <input type="radio" name="menu-item" id="reviews-input-1" checked>
    <input type="radio" name="menu-item" id="reviews-input-2">
    <div class="admin-menu">
        <label class="admin-menu__item btn" for="reviews-input-1">Добавить книгу</label>
        <label class="admin-menu__item btn" for="reviews-input-2">Изменить существующую книгу</label>
    </div>
    <div class="admin-container__items">
    	<div class="admin-container__item">
				<form enctype="multipart/form-data" method="post">
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
						<input class="admin-container__input-text" type="text" name="book-link" id="" placeholder="/book-name">
					</div>
					<div class="admin-container__row">
						<input class="btn" type="submit" value="Отправить данные" />
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

    </div>
  </body>
</html>
