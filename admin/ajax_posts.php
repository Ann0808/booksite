<?php
include("settings.php");

session_start();
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
$username = isset( $_SESSION['adminname'] ) ? $_SESSION['adminname'] : ""; ?>
<?  require_once"picture.php";


//if ( $action != "login" && $action != "logout" && !$username ) {
  //login();
  //exit;
//}
// switch ( $action ) {
//   case 'login':
//     login();
//     break;
//   case 'logout':
//     logout();
//     break;
// }
// function login() {
//   $results = array();
//   $results['pageTitle'] = "Admin Login | Widget News";
//   if ( isset( $_POST['login'] ) ) {
//     // Пользователь получает форму входа: попытка авторизировать пользователя
//     if ( $_POST['username'] == ADMIN_USERNAME && $_POST['password'] == ADMIN_PASSWORD ) {
//       // Вход прошел успешно: создаем сессию и перенаправляем на страницу администратора
//       $_SESSION['username'] = ADMIN_USERNAME;
//       header( "Location: admin.php" );
//     } else {
//       // Ошибка входа: выводим сообщение об ошибке для пользователя
//       $results['errorMessage'] = "Incorrect username or password. Please try again.";
//       require( "login.php" );
//     }
//   } else {
//     // Пользователь еще не получил форму: выводим форму
//     require( "login.php" );
//   }
// }
// function logout() {
//   unset( $_SESSION['username'] );
//   header( "Location: login.php" );
// }
if ( $_SESSION['adminname'] == $adminLogin):

// $dbhost  = 'localhost';
//  $dbname  = 'cms';
//  $dbuser  = DB_USERNAME;
//  $dbpass  = DB_PASSWORD;
 // $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
 // if ($connection->connect_error) die($connection->connect_error);
// if(isset($_POST['book-name'])) {
//     Book::findBook($_POST);
//    }



   // if(isset($_POST['update_book'])){
   //
   //  echo("ok");
   //  var_dump($_FILES);
   //  // $ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));
   //   // Проверяем тип файла
   // // if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
   // //    die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
   // // }
   //
   // $book = new Book($_POST,$_FILES);
   //  if ((!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile))||(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop))||(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook))) {
   //    echo 'Что-то пошло не так(';
   //  }
   //  else {
   //
   //  }
   //  $book->update();
   //
   //  echo 'Загрузка удачна';
   //    }

	 if(isset($_POST['flagEdit'])) {
		 $txt = "";
		 $book = new Book($_POST,$_FILES);
		  if (!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile)){
		    $txt .= 'Логотип для мобильной версии не обновлен <br>'; ?>
		                         <br>
		                         <? }
		  if(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop)) {
		    $txt .= 'Логотип для десктопрой версии не обновлен<br>'; ?>
		                             <br>
		                             <? }
		  if(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook)) {
		    $txt .= 'Миниатюра не обновлена<br>'; ?>
		                                 <br>
		                                 <? }
		  $book->update();
		  $logo= $book->logoBook;
		 if($logo!=null){
		 	picture_book($book->logoBook);
		 }

		  ?>

		                                     <script>
		                                         if (document.URL.indexOf("#") == -1) { //Check if the current URL contains '#'
		                                             url = document.URL + "#"; // use "#". Add hash to URL
		                                             location = "#";
		                                             location.reload(true); //Reload the page
		                                         }
		                                     </script>
		                                     <?$txt .= '<b>Книга отредактирована</b>';
																				 echo $txt;
	 }

	 if (isset($_POST['flag']))
	 {?>

	<?	 //$name=$_POST['book-name'];
		 //$link=$_POST['book-link'];
		 $txt="";
		 $types = array('image/jpeg');
		 $ext = array_pop(explode('.',$_FILES['picture-mobile']['name']));

		 // Проверяем тип файла

	 if ((!in_array($_FILES['picture-mobile']['type'], $types))||(!in_array($_FILES['picture-desktop']['type'], $types))||(!in_array($_FILES['picture-book']['type'], $types))) {
			die('Все файлы должны быть в формате jpg. <a href="?">Попробовать загрузить снова?</a>');
	 }

	 $book = new Book($_POST,$_FILES);
		if ((!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile))||(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop))||(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook))) {
			echo 'Что-то пошло не так';
		}
		else {

			$book->insert();
			//queryMysql("INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$name','$logo1','$logo2','$img','$author','$link')");
			picture_book($book->logoBook);

			echo 'Загрузка удачна';
		}

	 }


		if(isset($_POST['chapter-id'])) {

    Chapter::updateChapter($_POST);
   }

   if((isset($_POST['book-id']))&&(isset($_POST['chapter-name']))) {
    $chapter = new Chapter($_POST);
    $chapter->insert();
  }
endif;
?>
