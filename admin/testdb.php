<?php
require( "../config.php" );
$dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;

$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if ($connection->connect_error) die($connection->connect_error);
function queryMysql($query)
  {
    global $mysqli;
    $result = $mysqli->query($query);
    if (!$result) die($mysqli->error);
    return $result;
  }
  ?>
  введите данные для книги
  <form action="testdb.php" method="post">
имя: <input type="text" name="name"><br>
лого для мобильного: <input type="text" name="logo-mob"><br>
лого: <input type="text" name="logo-desc"><br>
изображение книги: <input type="text" name="logo-img"><br>
<input type="submit" name="submit">
</form>

<?php
 if(isset($_POST['submit'])) {
   $name=$_POST['name'];
   $logo1=$_POST['logo-mob'];
   $logo2=$_POST['logo-desc'];
   $img=$_POST['logo-img'];
   queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desc`, `image`) VALUES ('$name','$logo1','$logo2','$img')");
 }


 ?>
