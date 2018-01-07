
<?php
require( "settings.php" );
$id_user = $_GET['us_login']
Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('67','$id_user')");


exit();

 ?>
