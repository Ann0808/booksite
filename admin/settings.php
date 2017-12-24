<?php

 require_once( "../config.php" );
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
 ?>
