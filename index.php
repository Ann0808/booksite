<?php  require_once( "config.php" );
 $dbhost  = HOST;
 $dbname  = DB_NAME;
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
   Book::queryMysql("SET NAMES utf8");
   $adminQuery = Book::queryMysql("SELECT * FROM admin");
   $adminQuery = $adminQuery->fetch_array(MYSQLI_ASSOC);
   $adminLogin = $adminQuery['login'];
   $adminPassword = $adminQuery['password'];
   $adminName = $adminQuery['name'];
session_start();
$id_user = $_SESSION['user_id'];
?>
<!doctype html>
<html>
<?php
    $books_images_my = Book::queryMysql("SELECT books.link, books.image
FROM purchases
INNER JOIN books ON purchases.id_book =books.id  WHERE id_member!='$id_user' AND books.admin=1;");
    $books_other_query = Book::queryMysql("SELECT books.link, books.image
FROM purchases
INNER JOIN books ON purchases.id_book =books.id  WHERE id_member!='$id_user' AND books.admin=0;");
    $books_images_purchased = Book::queryMysql("SELECT books.link, books.image
FROM purchases
INNER JOIN books ON purchases.id_book =books.id  WHERE id_member='$id_user';");
//		$row = $books_other_query->fetch_array(MYSQLI_ASSOC);
//		$books_images_other=$row['image']
 ?>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- then add bootstrap to local -->
  <link rel="stylesheet" href="../css/grid.min.css">
  <script src="/js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="../js/script.js"></script>
    <link rel="stylesheet" href="../css/style.css">
</head>
<!--// I am A!!!-->
<body>
  <?php if ( $_SESSION['adminname'] == $adminLogin):
    include ("admin-flag.php");
   endif; ?>
  <div class="button-to-top">
    <img src="/img/standart/up.png" alt="" width="50px" height="50px">
  </div>
  <main class="main-page">
    <section class="purchased-books">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Приобретенные книги</h2>
        </div>
        <div id="carouselPurchased" class="carousel" >
          <button class="prev">Назад</button><button class="next">Вперед</button>
          <?php
          foreach ($books_images_purchased as $value) {
						$id_link = 0;
						$is_link = true;

           foreach ($value as $v) {
						 if($is_link){
							$id_link =  $v;
						 }
						 else {
							  echo ('<a class="carousel__item" href="page.php?chapter=0&book='.$id_link.'">  <img src='.$v.' alt="slide 1"></a>');
						 }

          $is_link = false;}
        }
           ?>

          <?php //include( 'carousel-inner.php'); ?>
        </div>
      </div>
    </section>
    <section class="recommended-books">
      <div class="container">
        <div class="row justify-content-center">

<h2 class="carousel-title">Рекомендуемые книги автора </h2>
        </div>
        <div id="carouselRecommended" class="carousel" >
            <button class="prev">Назад</button><button class="next">Вперед</button>
            <?php
            foreach ($books_images_my as $value) {
  						$id_link = 0;
  						$is_link = true;

             foreach ($value as $v) {
  						 if($is_link){
  							$id_link =  $v;
  						 }
  						 else {
  							  echo ('<a class="carousel__item" href="page.php?chapter=0&book='.$id_link.'">  <img src='.$v.' alt="slide 1"></a>');
  						 }

            $is_link = false;}
          }
             ?>

        </div>
      </div>
    </section>
    <section class="interesting">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Вам может быть интересно</h2>
        </div>
        <div id="carouselInteresting" class="carousel" >
          <button class="prev">Назад</button><button class="next">Вперед</button>
          <?php
          foreach ($books_other_query as $value) {
						$id_link = 0;
						$is_link = true;

           foreach ($value as $v) {
						 if($is_link){
							$id_link =  $v;
						 }
						 else {
							  echo ('<a class="carousel__item" href="page.php?chapter=0&book='.$id_link.'">  <img src='.$v.' alt="slide 1"></a>');
						 }

          $is_link = false;}
        }
           ?>
        </div>
      </div>
    </section>
  </main>
  <script type="text/javascript" src="/js/script.js"></script>
  <script type="text/javascript" src="/js/carousel.js"></script>
</body>
</html>
