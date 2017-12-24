<? session_start();
?>
<!DOCTYPE html>
<?php	 ?>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <script src="/js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/snow.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<?php
  require_once 'functions.php';
	$id_link =  $_GET["book"];
	$searchBook = queryMysql("SELECT * FROM `books` WHERE `link`='$id_link'");
	$row = $searchBook->fetch_array(MYSQLI_ASSOC);
	$image=$row['image'];
	$logo_mob=$row['logo-mob'];
	$logo_desk=$row['logo-desk'];
	$author_name=$row['author_name'];
	$book_id=$row['id'];
	$searchChapters = queryMysql("SELECT * FROM `chapter` WHERE `book_id`='$book_id'");

	?>
<body class="admin__body">
 <div class="container">
 	<div class="button-to-top">
      <img src="/img/up.png" alt="" width="50px" height="50px">
  </div>
  <header class="page-header">

          <picture>
            <source media="(min-width:768px)" srcset='<? echo $logo_desk; ?>'>
            <img src='<? echo $logo_mob; ?>' alt="logo" width="100%" height="200px;">
          </picture>
  </header>
  <main class="book-page">
    <nav class="main-nav  main-nav--closed main-nav--nojs">
                <button class="main-nav__toggle" type="button">Открыть меню</button>
                <div class="main-nav__wrapper">
                    <ul class="main-nav__items">
                    <?
											$text=0;

											foreach($searchChapters as $value){
												echo '<li class="main-nav__item"><a href="">'.$value["name"].'</a></li>';
												$text = $value["text"];
											}

											?>
                    </ul>
                </div>
            </nav>
    <div class="chapters">
      <h2 class="book-name">Название книги</h2>
       <div class="chapters__book"><img src='<? echo $image; ?>' alt="Обложка книги"></div>
       <div class="chapters__text"> <? echo $text; ?> </div>
    </div>
  </main>
 </div>

<script>
	var navMain = document.querySelector('.main-nav');
            var navToggle = document.querySelector('.main-nav__toggle');

            navMain.classList.remove('main-nav--nojs');

            navToggle.addEventListener('click', function() {
                if (navMain.classList.contains('main-nav--closed')) {
                    navMain.classList.remove('main-nav--closed');
                    navMain.classList.add('main-nav--opened');
                } else {
                    navMain.classList.remove('main-nav--opened');
                    navMain.classList.add('main-nav--closed');

                }
            });
	</script>
</body>

</html>
