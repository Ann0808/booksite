<?php

 require_once( "../config.php" );
 $dbhost  = HOST;
 $dbname  = DB_NAME;
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;

 $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
   queryMysql("SET NAMES utf8");
   $adminQuery = queryMysql("SELECT * FROM admin");


   $adminQuery = $adminQuery->fetch_array(MYSQLI_ASSOC);
   $adminLogin = $adminQuery['login'];
   $adminPassword = $adminQuery['password'];
  $adminName = $adminQuery['name'];
 ?>
