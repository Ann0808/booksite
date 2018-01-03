<?php
require( "config.php" );
$dbhost  = HOST;
$dbname  = DB_NAME;
$dbuser  = DB_USERNAME;
$dbpass  = DB_PASSWORD;
$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

Book::queryMysql("INSERT INTO `info` (`label`) VALUES('1')");
 ?>
