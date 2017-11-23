<!doctype html>
<html ng-app="myApp">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/css/style.css">
  <!-- then add bootstrap to local -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <script type="text/javascript" src="/js/script.js"></script>
</head>

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
        <div class="row">
          <div id="carouselPurchased" class="carousel slide" data-ride="carousel">
            <?php include( 'carousel-inner.php'); ?>
            <a class="carousel-control-prev" href="#carouselPurchased" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselPurchased" role="button" data-slide="next">
                <i class="fa fa-chevron-right fa-lg text-muted"></i>
                <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="recommended-books">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Рекомендуемые книги автора</h2>
        </div>
        <div class="row">
          <div id="carouselRecommended" class="carousel slide" data-ride="carousel" >
            <?php include( 'carousel-inner.php'); ?>
            <a class="carousel-control-prev" href="#carouselRecommended" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselRecommended" role="button" data-slide="next">
                 <i class="fa fa-chevron-right fa-lg text-muted"></i>
                 <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="interesting">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="carousel-title">Вам может быть интересно</h2>
        </div>
        <div class="row">
          <div id="carouselInteresting" class="carousel slide" data-ride="carousel" >
            <?php include( 'carousel-inner.php'); ?>
            <a class="carousel-control-prev" href="#carouselInteresting" role="button" data-slide="prev">
                <i class="fa fa-chevron-left fa-lg text-muted"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next text-faded" href="#carouselInteresting" role="button" data-slide="next">
                <i class="fa fa-chevron-right fa-lg text-muted"></i>
                <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
