<?php
require( "../config.php" );
session_start();
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
$username = isset( $_SESSION['username'] ) ? $_SESSION['username'] : ""; ?>
<? if ( $action != "login" && $action != "logout" && !$username ) {
  login();
  exit;
}
switch ( $action ) {
  case 'login':
    login();
    break;
  case 'logout':
    logout();
    break;
}
function login() {
  $results = array();
  $results['pageTitle'] = "Admin Login | Widget News";
  if ( isset( $_POST['login'] ) ) {
    // Пользователь получает форму входа: попытка авторизировать пользователя
    if ( $_POST['username'] == ADMIN_USERNAME && $_POST['password'] == ADMIN_PASSWORD ) {
      // Вход прошел успешно: создаем сессию и перенаправляем на страницу администратора
      $_SESSION['username'] = ADMIN_USERNAME;
      header( "Location: admin.php" );
    } else {
      // Ошибка входа: выводим сообщение об ошибке для пользователя
      $results['errorMessage'] = "Incorrect username or password. Please try again.";
      require( "login.php" );
    }
  } else {
    // Пользователь еще не получил форму: выводим форму
    require( "login.php" );
  }
}
function logout() {
  unset( $_SESSION['username'] );
  header( "Location: login.php" );
}
if ( $_SESSION['username'] == ADMIN_USERNAME):
$dbhost  = 'localhost';
 $dbname  = 'cms';
 $dbuser  = DB_USERNAME;
 $dbpass  = DB_PASSWORD;
 $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 if ($connection->connect_error) die($connection->connect_error);
if(isset($_POST['book-name'])) {
    Book::findBook($_POST);
   }
endif;
?>