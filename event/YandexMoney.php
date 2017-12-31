
<?php
require( "../config.php" );
$dbhost  = HOST;
$dbname  = DB_NAME;
$dbuser  = DB_USERNAME;
$dbpass  = DB_PASSWORD;
$admin_name = ADMIN_NAME;
$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
$id_user =4;
$id_book = $_POST['datetime'];
$hash = sha1($_POST['notification_type'].'&'.
$_POST['operation_id'].'&'.
$_POST['amount'].'&'.
$_POST['currency'].'&'.
$_POST['datetime'].'&'.
$_POST['sender'].'&'.
$_POST['codepro'].'&'.
'f83VWqwF4J4bMbyGUZ3++VuK'.'&'.
$_POST['label']);

if($_POST['sha1_hash'] != $hash or $_POST['codepro']===true or $_POST['unaccepted']===true) exit('error');

Book::queryMysql("INSERT INTO `info` (`label`) VALUES('$id_book')");

exit();

 ?>
