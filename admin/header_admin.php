<?php

 require( "../config.php" );
 $dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
 // function queryMysql($query)
 //   {
 //     global $mysqli;
 //     $result = $mysqli->query($query);
 //     if (!$result) die($mysqli->error);
 //     return $result;
 //   }
   // if(isset($_POST['submit'])) {
   //   $name=$_POST['book-name'];
   //
   // }
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Admin panel</title>
    <link rel="stylesheet" href="../css/style.css">
		<script src="../js/jquery-3.2.1.min.js"></script>
  </head>
  <body class="admin__body">
    <div class="admin-container">
    	<h1 class="admin-title">Добро пожаловать, Администратор</h1>
			<a class="btn" href="../index.php">Перейти на главную</a>
			<a class="btn" href="admin.php?action=logout"?>Выйти</a>
    </div>
    <div class="admin-container">
			<div class="admin-menu">
					<li><a href="admin.php"  class="btn" >Моя страница</a></li>
					<li><a href="addnewbook.php"  class="btn">Добавить книгу</a></li>
					<li><a href="showbooks.php"  class="btn">Список всех книг</a></li>
					<li><a href=""  class="btn">Изменить данные администратора</a></li>
			</div>
		</div>
