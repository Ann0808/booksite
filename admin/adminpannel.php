<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>you are admin!</h1>
    <a href="../index.php">gg</a>
    <a href="admin.php?action=logout"?>Log out</a></p>
    <form enctype="multipart/form-data" method="post">
<input placeholder="mobile" name="picture-mobile" type="file" />
<input type="submit" value="Загрузить" />
</form>
<form enctype="multipart/form-data" method="post">
<input name="picture-desktop" type="file" />
<input type="submit" value="Загрузить" />
</form>
<?php

$path = '../img/';
$types = array('image/gif', 'image/png', 'image/jpeg');
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
  // Проверяем тип файла
if (!in_array($_FILES['picture-mobile']['type'], $types)){
   die('Запрещённый тип файла. <a href="?">Попробовать другой файл?</a>');
}
 if (!@copy($_FILES['picture-mobile']['tmp_name'], $path . 'mobile-logo.' . $ext))
  echo 'Что-то пошло не так';
 else
  echo 'Загрузка удачна';
}

?>
  </body>
</html>
