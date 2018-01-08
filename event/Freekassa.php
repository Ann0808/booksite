
<?php
require( "settings.php" );
$id_user = $_POST['us_login'];
$id_book = $_POST['us_book'];
$searchMail = Book::queryMysql("SELECT email from members WHERE id='$id_user'");
$searchMail = $searchMail->fetch_array(MYSQLI_ASSOC);
$usermail = $searchMail['email'];

function getIP() {
    if(isset($_SERVER['HTTP_X_REAL_IP'])) return $_SERVER['HTTP_X_REAL_IP'];
    return $_SERVER['REMOTE_ADDR'];
    }
    if (!in_array(getIP(), array('136.243.38.147', '136.243.38.149', '136.243.38.150', '136.243.38.151', '136.243.38.189', '88.198.88.98'))) {
    die("hacking attempt!");
    }

Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('$id_book','$id_user')");

$query = Book::queryMysql("SELECT name, link from books WHERE id='$id_book'");
$query=$query->fetch_array(MYSQLI_ASSOC);
$bookname = $query['name'];
$booklink = $query['link'];
$link =  $_SERVER['HTTP_HOST'] . "/page.php?chapter=0&book=" . $booklink;
$textMail = "Здравствуйте!\nБлагодарим вас за покупку книги " . $bookname . "\nСсылка на Вашу книгу: ". $link;
mail($usermail, "Спасибо за покупку", $textMail);

exit();

 ?>
