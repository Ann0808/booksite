<?php
include("settings.php");

session_start();
$action = isset( $_GET['action'] ) ? $_GET['action'] : "";
$username = isset( $_SESSION['adminname'] ) ? $_SESSION['adminname'] : ""; ?>
<?  require_once"picture.php";

if ( $_SESSION['adminname'] == $adminLogin):

	 if(isset($_POST['flagEdit'])) {
		 $txt = "";
		 $book = new Book($_POST,$_FILES);
		  if (!@copy($_FILES['picture-mobile']['tmp_name'], $book->logoMobile)){
		    $txt .= 'Логотип для мобильной версии не обновлен <br>'; ?>
		                         
		                         <? }
		  if(!@copy($_FILES['picture-desktop']['tmp_name'], $book->logoDesktop)) {
		    $txt .= 'Логотип для десктопрой версии не обновлен<br>'; ?>

		                             <? }
		  if(!@copy($_FILES['picture-book']['tmp_name'], $book->logoBook)) {
		    $txt .= 'Миниатюра не обновлена<br>'; ?>

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
	 {

		 $types = array('image/jpeg');
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
