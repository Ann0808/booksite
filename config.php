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
define( "ADMIN_USERNAME", "admin" );
define( "ADMIN_PASSWORD", "mypass" );
define( "ADMIN_NAME", "Вася" );
require_once( CLASS_PATH . "/Book.php" );
require_once( CLASS_PATH . "/Chapter.php" );
//then add try catch
// function handleException( $exception ) {
//   echo "Sorry, a problem occurred. Please try later.";
//   error_log( $exception->getMessage() );
// }

//set_exception_handler( 'handleException' );
?>
