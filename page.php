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
  $currentChapter = $_GET["chapter"];
  queryMysql("SET NAMES utf8");
	$searchBook = queryMysql("SELECT * FROM `books` WHERE `link`='$id_link'");
  $adminQuery = queryMysql("SELECT `yandex_money`, `login` FROM `admin`");
  $adminYandexRow = $adminQuery->fetch_array(MYSQLI_ASSOC);
  $adminYandex = $adminYandexRow['yandex_money'];
  $adminLogin = $adminYandexRow['login'];
	$row = $searchBook->fetch_array(MYSQLI_ASSOC);
	$image=$row['image'];
	$logo_mob=$row['logo-mob'];
	$logo_desk=$row['logo-desk'];
	$author_name=$row['author_name'];
  $book_name=$row['name'];
	$book_id=$row['id'];
  $price = $row['price'];
	$searchChapters = queryMysql("SELECT * FROM `chapter` WHERE `book_id`='$book_id'");
  $acceptToChapter = false;
  $id_user = $_SESSION['user_id'];
    $label = $book_id . '|' . $id_user;
  $searchPurchasedBooks = queryMysql("SELECT * FROM `purchases` WHERE `id_book`='$book_id' AND `id_member`='$id_user'");
  $purchasedBooks=  $searchPurchasedBooks->fetch_array(MYSQLI_ASSOC);
  if((!empty($purchasedBooks))||($currentChapter==0)||( $_SESSION['adminname'] == $adminLogin)) {
    $acceptToChapter = true;
  }
	?>
<body class="admin__body">
 <div class="container">
 	<div class="button-to-top">
      <img src="/img/standart/up.png" alt="" width="50px" height="50px">

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
											$text=array();
                      
                      $j=0;

											foreach($searchChapters as $value){
												echo '<li class="main-nav__item"><a href="?chapter='.$j.'&book='.$id_link.'">'.$value["name"].'</a></li>';
												$text[] = $value["text"];
                        $j++;
											}

											?>
                    </ul>
                </div>
            </nav>
    <div class="chapters">
      <h2 class="book-name"><? echo $book_name; ?></h2>

      <h2 class="book-name red"><? echo $information; ?></h2>
      <?if($currentChapter==0){?>
       <div class="chapters__book"><img src='<? echo $image; ?>' alt="Обложка книги"></div>
<?}?>
       <div class="chapters__text"> <? if($acceptToChapter) {
         echo $text[$currentChapter];}
         else {
          if(isset($_SESSION['user_id'])){
            echo("для дальнейшего просмотра предлагаем купить книгу"); ?>
            <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=<?echo $price;?>&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2Fbooks.livefreely.ru%2Fpage.php%3Fchapter%3D0%26book%3D<?echo $id_link?>&quickpay=small&account=<?echo $adminYandex?>&label=<?echo $label?>" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
<?
           }
           else {
     				$_SESSION['href'] = "page.php?chapter=0&book=$id_link";
     				echo "<script>window.location.href='signin.php'</script>";
     			}

         }?> </div>
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
