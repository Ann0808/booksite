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
							'id INT(11) AUTO_INCREMENT PRIMARY KEY,
              user VARCHAR(16) NOT NULL,
			   name VARCHAR(16) NOT NULL,
			  surname VARCHAR(16),
              pass VARCHAR(16) NOT NULL');
?>

    <br> создали.
  </body>
</html>
