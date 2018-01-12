<? session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>\выйти</title>
    <link rel="stylesheet" href="/css/style.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<body class="admin__body">
 <?php
  require_once 'functions.php';

  if (isset($_SESSION['user']))
  {
    destroySession();
    die("<script>window.location = 'index';</script>");
  }
  else echo "<div class='main'><br>" .
            "You cannot log out because you are not logged in";
?>
</body>
</html>
