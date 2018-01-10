<? session_start();
?>
<!DOCTYPE html>
<?php	 ?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <script defer src="/js/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="/css/style.min.css">
    <link rel="stylesheet" href="/css/snow.css">
    <link rel="stylesheet" href="/css/noselect.css">
    <script defer type="text/javascript" src="/js/script.js"></script>
</head>
<?php
  require_once 'functions.php';
	$id_link =  $_GET["book"];
  $currentChapter = $_GET["chapter"];
  queryMysql("SET NAMES utf8");

	$searchBook = queryMysql("SELECT * FROM `books` WHERE `link`='$id_link'");
  $adminQuery = queryMysql("SELECT `yandex_money`, `login`, `email`, `freekassaID`, `freekassaSecret` FROM `admin`");
  $adminYandexRow = $adminQuery->fetch_array(MYSQLI_ASSOC);
  $adminYandex = $adminYandexRow['yandex_money'];
  $adminLogin = $adminYandexRow['login'];
  $adminEmail = $adminYandexRow['email'];
  $host =$_SERVER['HTTP_HOST'];
	$row = $searchBook->fetch_array(MYSQLI_ASSOC);
	$image=$row['image'];
	$logo_mob=$row['logo-mob'];
	$logo_desk=$row['logo-desk'];
	$author_name=$row['author_name'];
  $book_name=$row['name'];
	$book_id=$row['id'];
  $freeKassaId = $adminYandexRow['freekassaID'];
  $freeKassaSecret = $adminYandexRow['freekassaSecret'];
  $price = $row['price'];
	$searchChapters = queryMysql("SELECT * FROM `chapter` WHERE `book_id`='$book_id'");
  $acceptToChapter = false;
  $usermail = '';
  if(isset($_SESSION['user'])) {
    $id_user = $_SESSION['user_id'];
    $searchMail = queryMysql("SELECT email from members WHERE id='$id_user'");
    $searchMail = $searchMail->fetch_array(MYSQLI_ASSOC);
    $usermail = $searchMail['email'];
  } else {
    $id_user = 0;
  }
  $_SESSION['href'] = "page.php?chapter=0&book=$id_link";
  $searchBlackList = queryMysql("SELECT * FROM `black_list` WHERE `user_id`='$id_user'");
  $isBlack = $searchBlackList->num_rows;
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
            <img src='<? echo $logo_mob; ?>' alt="logo" width="100%" height="auto;">
          </picture>
  </header>
  <main class="book-page">
    <nav class="main-nav  main-nav--closed main-nav--nojs">
                <button class="main-nav__toggle" type="button">Открыть меню</button>
                <div class="main-nav__wrapper">
                    <ul class="main-nav__items">
                      <li class="main-nav__item main-nav__item-special"><a href="/">На главную</a></li>
                    <?

											$text=array();
                      $chapterNames=array();
                      $j=0;

											foreach($searchChapters as $value){
												echo '<li class="main-nav__item"><a href="?chapter='.$j.'&book='.$id_link.'">'.$value["name"].'</a></li>';
												$text[] = $value["text"];
                        $chapterNames[] = $value["name"];
                        $j++;
											}

                      if ($id_user!=0) {
                        echo '<li class="main-nav__item main-nav__item-special"><a href="/signout.php">Выйти</a></li>';
                      } else {
                        echo '<li class="main-nav__item main-nav__item-special"><a href="/signin.php">Войти</a></li>';
                      }

											?>
                    </ul>
                </div>
            </nav>
    <div class="chapters">
      <h2 class="book-name"><? echo $book_name; ?></h2>
      <h2 class="book-name"><? echo $chapterNames[$currentChapter]; ?></h2>

      <?if($currentChapter==0){
        if(!empty($purchasedBooks)) {?>
        <h2 class="success"><? echo "Спасибо за приобретение книги!"; ?></h2>
        <?}?>
       <div class="chapters__book"><img src='<? echo $image; ?>' alt="Обложка книги"></div>
<?}?>
       <div class="chapters__text noselect">
        <?if($isBlack){
           echo "иди нафиг пиши  <a href='mailto:$adminEmail?Subject=Черный%список' target='_top'>на этот адрес:</a>$adminEmail";
         }
          else {?>

         <? if($acceptToChapter) {
         echo $text[$currentChapter];
       }
         else {
          if(isset($_SESSION['user_id'])){
            echo("Для дальнейшего просмотра предлагаем купить книгу"); ?>
            <p>Банковской картой:</p>
            <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=<?echo $price;?>&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2F<?echo $host?>%2Fpage.php%3Fchapter%3D0%26book%3D<?echo $id_link?>&quickpay=small&account=<?echo $adminYandex?>&label=<?echo $label?>" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>

            <p>Яндекс-деньгами:</p>
            <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=<?echo $price;?>&button-text=11&yamoney-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2F<?echo $host?>%2Fpage.php%3Fchapter%3D0%26book%3D<?echo $id_link?>&quickpay=small&account=<?echo $adminYandex?>&label=<?echo $label?>" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
            <p>Другие способы:</p>
            <?php
$merchant_id = $freeKassaId;
$secret_word = $freeKassaSecret;
$order_id = $book_id . $id_user;
$order_amount = $price;
$sign = md5($merchant_id.':'.$order_amount.':'.$secret_word.':'.$order_id);

?>
  <form method='get' action='http://www.free-kassa.ru/merchant/cash.php'>
    <input type='hidden' name='m' value='<?php echo $merchant_id?>'>
    <input type='hidden' name='oa' value='<?php echo $order_amount?>'>
    <input type='hidden' name='o' value='<?php echo $order_id?>'>
    <input type='hidden' name='s' value='<?php echo $sign?>'>
    <input type='hidden' name='em' value='<?php echo $usermail?>'>
    <input type='hidden' name='lang' value='ru'>
    <input type='hidden' name='us_login' value='<? echo $id_user?>'>
    <input type='hidden' name='us_book' value='<? echo $book_id?>'>
    <input class="btn" type='submit' name='pay' value='Оплатить'>
  </form>

<?
           }
           else {

     				echo "<script>window.location.href='signin.php'</script>";
     			}

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
