<?php

require( "../config.php" );
$dbhost  = HOST;
$dbname  = DB_NAME;
$dbuser  = DB_USERNAME;
$dbpass  = DB_PASSWORD;
$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if ($connection->connect_error) die($connection->connect_error);
  Book::queryMysql("SET NAMES utf8");
  $adminQuery = Book::queryMysql("SELECT yandex_secret FROM admin");


  $adminQuery = $adminQuery->fetch_array(MYSQLI_ASSOC);
  $key = $adminQuery['yandex_secret'];
 ?>
