<?php
ini_set( "display_errors", true );
date_default_timezone_set( "Europe/Amsterdam" );  // http://www.php.net/manual/en/timezones.php
define( "DB_DSN", "mysql:host=localhost;dbname=cms" );
define( "HOST", "localhost" );
define( "DB_NAME", "cms" );
define( "DB_USERNAME", "cms" );
define( "DB_PASSWORD", "080895" );
define( "CLASS_PATH", "classes" );
// define( "TEMPLATE_PATH", "/" );
// define( "ADMIN_USERNAME", "admin" );
// define( "ADMIN_PASSWORD", "mypass" );
// define( "ADMIN_NAME", "Вася" );
// define( "ADMIN_YANDEX", "41001379265341" );
require_once( CLASS_PATH . "/Book.php" );
require_once( CLASS_PATH . "/Chapter.php" );
require_once( "functions.php" );
//then add try catch
// function handleException( $exception ) {
//   echo "Sorry, a problem occurred. Please try later.";
//   error_log( $exception->getMessage() );
// }

//set_exception_handler( 'handleException' );
?>
