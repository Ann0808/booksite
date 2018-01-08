
<?php
require( "settings.php" );
$id_user = $_POST['us_login'];
$id_book = $_POST['us_book'];
Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('$id_book','$id_user')");


exit();

 ?>
