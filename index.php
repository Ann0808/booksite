<!doctype html>
<html ng-app="myApp">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- then add bootstrap to local -->
  <link rel="stylesheet" href="../css/grid.min.css">
  <script src="/js/jquery-3.2.1.min.js"></script>
  <!-- <script src="" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> -->
  <script type="text/javascript" src="../js/script.js"></script>
    <!-- <script type="text/javascript" src="../js/carousel.js"></script> -->
    <link rel="stylesheet" href="../css/style.css">
</head>
<!--// I am A!!!-->
<body>
  <div class="button-to-top">
    <!-- <span class="glyphicon glyphico-arrow-up"></span> -->
    <img src="/img/up.png" alt="" width="50px" height="50px">
  </div>
  <main class="main-page">
    <section class="purchased-books">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Приобретенные книги</h2>
        </div>
        <!-- <div class="row"> -->
        <div id="carouselPurchased" class="carousel" >
          <?php include( 'carousel-inner.php'); ?>
        </div>
          <!-- <div id="carouselPurchased" class="carousel slide" data-ride="carousel" data-interval="false">

            <a class="carousel-control-prev" href="#carouselPurchased" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselPurchased" role="button" data-slide="next">
                <i class="fa fa-chevron-right fa-lg text-muted"></i>
                <span class="sr-only">Next</span>
            </a>
          </div> -->
        <!-- </div> -->
      </div>
    </section>
    <section class="recommended-books">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Рекомендуемые книги автора</h2>
        </div>
        <div id="carouselRecommended" class="carousel" >
          <?php include( 'carousel-inner.php'); ?>
        </div>
        <!-- <div class="row">
          <div id="carouselRecommended" class="carousel slide" data-ride="carousel" >
            <?php //include( 'carousel-inner.php'); ?>
            <a class="carousel-control-prev" href="#carouselRecommended" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselRecommended" role="button" data-slide="next">
                 <i class="fa fa-chevron-right fa-lg text-muted"></i>
                 <span class="sr-only">Next</span>
            </a>
          </div>
        </div> -->
      </div>
    </section>
    <section class="interesting">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Вам может быть интересно</h2>
        </div>
        <div id="carouselInteresting" class="carousel" >
          <?php include( 'carousel-inner.php'); ?>
        </div>
        <!-- <div class="row">
          <div id="carouselInteresting" class="carousel slide" data-ride="carousel" >
            <?php //include( 'carousel-inner.php'); ?>
            <a class="carousel-control-prev" href="#carouselInteresting" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselInteresting" role="button" data-slide="next">
                <i class="fa fa-chevron-right fa-lg text-muted"></i>
                <span class="sr-only">Next</span>
            </a>
          </div>
        </div> -->
      </div>
    </section>
  </main>
  <script type="text/javascript" src="/js/script.js"></script>
  <script type="text/javascript" src="/js/carousel.js"></script>
</body>
</html>
