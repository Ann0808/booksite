<?php
require_once( "../config.php" );
session_start();
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
$username = isset( $_SESSION['adminname'] ) ? $_SESSION['adminname'] : ""; ?>
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
      $_SESSION['adminname'] = ADMIN_USERNAME;
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
  unset( $_SESSION['adminname'] );
  header( "Location: login.php" );
}
if ( $_SESSION['adminname'] == ADMIN_USERNAME) {
  include('adminpannel.php');
}
?>
