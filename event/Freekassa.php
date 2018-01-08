
<?php
require( "settings.php" );
$id_user = $_POST['us_login'];
$id_book = $_POST['us_book'];

function getIP() {
    if(isset($_SERVER['HTTP_X_REAL_IP'])) return $_SERVER['HTTP_X_REAL_IP'];
    return $_SERVER['REMOTE_ADDR'];
    }
    if (!in_array(getIP(), array('136.243.38.147', '136.243.38.149', '136.243.38.150', '136.243.38.151', '136.243.38.189', '88.198.88.98'))) {
    die("hacking attempt!");
    }

Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('$id_book','$id_user')");


exit();

 ?>
