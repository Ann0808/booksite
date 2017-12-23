<!DOCTYPE html>
<html>
  <head>
    <title>Создание базы данных</title>
  </head>
  <body>

    <h3>Создаем</h3>

<?php
  require_once 'functions.php';

  createTable('members',
              'user VARCHAR(16) PRIMARY KEY,
			   name VARCHAR(16),
			  surname VARCHAR(16),
              pass VARCHAR(16),
              INDEX(user(6))');

?>

    <br> создали.
  </body>
</html>
