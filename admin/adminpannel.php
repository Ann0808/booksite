<!DOCTYPE html>
<?php

 //require( "../config.php" );
 $dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
 // function queryMysql($query)
 //   {
 //     global $mysqli;
 //     $result = $mysqli->query($query);
 //     if (!$result) die($mysqli->error);
 //     return $result;
 //   }
   // if(isset($_POST['submit'])) {
   //   $name=$_POST['book-name'];
   //
   // }
 ?>

<html>
  <head>
    <meta charset="utf-8">
    <title>Admin panel</title>
    <link rel="stylesheet" href="../css/style.css">
		<script src="../js/jquery-3.2.1.min.js"></script>
  </head>
  <body class="admin__body">
    <div class="admin-container">
    	<h1 class="admin-title">Добро пожаловать, Администратор</h1>
			<a class="btn" href="../index.php">Перейти на главную</a>
			<a class="btn" href="admin.php?action=logout"?>Выйти</a>
			<a class="btn" href="admin_pannel.php">Аналог панели администратора</a>
    </div>
    <div class="admin-container">
    <input type="radio" name="menu-item" id="reviews-input-1" checked>
    <input type="radio" name="menu-item" id="reviews-input-2">
    <input type="radio" name="menu-item" id="reviews-input-3">
    <div class="admin-menu">
        <li class="admin-menu__item btn"><a href="ad">Моя страница</a></li>
        <li class="admin-menu__item btn"><a href="">Добавить книгу</a></li>
        <li class="admin-menu__item btn"><a href="">Список всех книг</a></li>
        <li class="admin-menu__item btn"><a href="">Изменить данные администратора</a></li>
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
								//$path = '../img/';
								$types = array('image/jpeg'); //only jpg
                echo("");
								if (($_SERVER['REQUEST_METHOD'] == 'POST')&&(isset($_POST['submit'])))
								{
                  //$name=$_POST['book-name'];
                  //$link=$_POST['book-link'];
									$ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
									// Проверяем тип файла
								if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
									 die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
								}

                $book = new Book($_POST,$_FILES);
								 if ((!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile))||(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop))||(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook))) {
                   echo 'Что-то пошло не так';
                 }
								 else {
                   $book->insert();
                   //queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$name','$logo1','$logo2','$img','$author','$link')");
                   echo 'Загрузка удачна';
                 }

								}
							?>
						</p>
					</div>
				</form>

			</div>
			<div class="admin-container__item">
			<form  method="post" id="search">
					<div class="admin-container__row">
						<p>Название книги</p>
						<input class="admin-container__input-text" type="text" name="book-name" id="book-name" placeholder="Война и мир">
					</div>
					<div class="admin-container__row">
						<input type="submit" class="btn" value="Найти" name="findBook" >

					</div>
				</form>
				<div id="information_search"></div>
			</div>
			<div class="admin-container__item">
			<form enctype="multipart/form-data" method="post">
				<div class="admin-container__row">
						<p>Старый пароль</p>
						<input class="admin-container__input-text" type="password" name="password" id="" placeholder="Старый пароль">
					</div>
					<div class="admin-container__row">
						<p>Полное имя</p>
						<input class="admin-container__input-text" type="text" name="admin-name" id="" placeholder="Аркадий Афанасьевич Фет">
					</div>
					<div class="admin-container__row">
						<p>Новый пароль</p>
						<input class="admin-container__input-text" type="password" name="password-new" id="" placeholder="Новый пароль">
					</div>
					<div class="admin-container__row">
						<p>Повтор пароля</p>
						<input class="admin-container__input-text" type="password" name="password-new-again" id="" placeholder="Повтор пароля">
					</div>
					<div class="admin-container__row">
						<input class="btn" type="submit" value="Обновить" />
						<p>
							<?php
								/*result*/
							?>
						</p>
					</div>
				</form>
			</div>
    </div>
    </div>
    <script>
					$("#search").submit(function(event) {
									event.preventDefault();
									var book_name = $("#book-name").val();
									$.ajax({
											type: "POST",
											url: "search_book.php",
											data: {"book-name": book_name},
											cache: false,
											success: function(response){
													document.getElementById("information_search").innerHTML = response;
										 },
										error: function(response) {
											 document.getElementById("information_search").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
										}
									});
									return false;
					});

			//////////////////////////////////////////////////////////////

			$("#form-update-book").submit(function(event) {
									event.preventDefault();
									var book_author =$('#author-name').val();
									$.ajax({
											type: "POST",
											url: "search_book.php",
											data: {"book-author": book_author},
											cache: false,
											success: function(response){
													document.getElementById("information_search").innerHTML = response + book_author;
										 },
										error: function(response) {
											 document.getElementById("information_search").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
										}
									});
									return false;
					});

			////////////////////////////////////////////////////////////////////////////

							function visible(e) {

									$(e).siblings().toggleClass("visible");
							}

              function visibleAddChapter() {
								$(".admin_container__wrapper.hidden").addClass("visible");
							}

						function update_chapter(e) {
							var chapter_id = $(e).data("id");
							 var chapter_name =$('#chp-'+chapter_id+' input').val();
							 var chapter_text =$('#chp-'+chapter_id+' textarea').val();
							$.ajax({
											type: "POST",
											url: "search_book.php",
											data: {"chapter-name": chapter_name,
														"chapter-id": chapter_id,
														 "chapter-text": chapter_text
														},
											cache: false,
											success: function(response){
													document.getElementById("information_search").innerHTML = response;
										 },
										error: function(response) {
											 document.getElementById("information_search").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
										}
									});
									return false;
						}



            function update_book(e) {
              e.preventDefault();

              //alert( new FormData(el));


							/*var $logomob = $("#logomob");
							var lm = new FormData;
    					lm.append('img', $logomob.prop('files')[0]);


							var $logodesk = $("#logodesk");
							var ld = new FormData;
    					ld.append('img', $logodesk.prop('files')[0]);


							var $imgbook = $("#imgbook");
							var ib = new FormData;
    					ib.append('img', $imgbook.prop('files')[0]);



               var book_new =$('#book-name-new').val();
               var book_link =$('#book-link').val();*/
               var book_new =$('#book-name-new').val();
               var book_link =$('#book-link').val();
							 var book_author =$('#author-name').val();
							 var book_id = $('#onUpdateBookButton').data("id");

              $.ajax({
                      type: "POST",
                      url: "search_book.php",
                       data: {
												 /*"book-name": book_new,

												 "book-link": book_link,
												 "update_book": "true",
												 lm,
												 ld,
												 lb,	*/
                        "update_book": "true",
                        "book-name": book_new,
                         "book-link": book_link,
												 "book-id": book_id,
												 "book-author": book_author

					             },
                      /*data:  new FormData(el),
                      contentType: false,
            					processData: false,*/
                      cache: false,
                      success: function(response){
                          document.getElementById("information_search").innerHTML = response;
                     },
                    error: function(response) {
                       document.getElementById("information_search").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
                    }
                  });

                  return false;
            }

            function add_chapter(e) {
							var book_id = $(e).data("id");
							 var chapter_name =$('#addNewChapterWrapper input').val();
							 var chapter_text =$('#addNewChapterWrapper textarea').val();
							$.ajax({
											type: "POST",
											url: "search_book.php",
											data: {
                             "book-id": book_id,
                             "chapter-name": chapter_name,
														 "chapter-text": chapter_text
														},
											cache: false,
											success: function(response){
													document.getElementById("information_search").innerHTML = response;
										 },
										error: function(response) {
											 document.getElementById("information_search").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
										}
									});
									return false;
						}

	</script>
  </body>
</html>
