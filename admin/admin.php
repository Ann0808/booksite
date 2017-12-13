<?php
include("settings.php");
session_start();
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
$username = isset( $_SESSION['adminname'] ) ? $_SESSION['adminname'] : ""; ?>
<? if ( $action != "login" && $action != "logout" && !$username ) {
  login($adminLogin, $adminPassword);
  exit;
}
switch ( $action ) {
  case 'login':
    login($adminLogin, $adminPassword);
    break;
  case 'logout':
    logout();
    break;
}
function login($admLog, $admPass) {
  $results = array();
  $results['pageTitle'] = "Admin Login | Widget News";
  if ( isset( $_POST['login'] ) ) {
    // Пользователь получает форму входа: попытка авторизировать пользователя
    if ( $_POST['username'] == $admLog && $_POST['password'] == $admPass ) {
      // Вход прошел успешно: создаем сессию и перенаправляем на страницу администратора
      $_SESSION['adminname'] = $admLog;
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
if ( $_SESSION['adminname'] == $adminLogin) {
  include('adminpannel.php');
}
?>
