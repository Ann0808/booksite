
<?php
require( "settings.php" );

//$id_user =4;
$id_book_and_user = $_POST['label'];
$str=strpos($id_book_and_user, "|");
$id_book =substr($id_book_and_user, 0, $str);
$id_user = substr($id_book_and_user, $str+1, strlen($id_book_and_user));

$hash = sha1($_POST['notification_type'].'&'.
$_POST['operation_id'].'&'.
$_POST['amount'].'&'.
$_POST['currency'].'&'.
$_POST['datetime'].'&'.
$_POST['sender'].'&'.
$_POST['codepro'].'&'.
$key.'&'.
$_POST['label']);

if($_POST['sha1_hash'] != $hash or $_POST['codepro']===true or $_POST['unaccepted']===true) exit('error');
Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('$id_book','$id_user')");


exit();

 ?>
