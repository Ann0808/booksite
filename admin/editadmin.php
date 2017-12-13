<?php include("settings.php");
session_start(); ?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");

 ?>

<div class="admin-container">
  <div class="admin-container__items">
    <div class="admin-container__item">
   			<form action="editadmin.php" method="post">
          <div class="admin-container__row">
            <p>Ваше имя</p>
            <input class="admin-container__input-text" type="text" name="admin-name" id="" placeholder="Аркадий Афанасьевич Фет">
          </div>
          <div class="admin-container__row">
            <p>Новый логин</p>
            <input class="admin-container__input-text" type="text" name="admin-login" id="" placeholder="login">
          </div>
   				<div class="admin-container__row">
   						<p>Старый пароль</p>
   						<input class="admin-container__input-text" type="password" name="password" id="" placeholder="Старый пароль">
   					</div>
   					<div class="admin-container__row">
   					<p>Новый пароль</p>
   						<input class="admin-container__input-text" type="password" name="password-new" id="" placeholder="Новый пароль">
   					</div>
   				<div class="admin-container__row">
   						<p>Повтор пароля</p>
   						<input class="admin-container__input-text" type="password" name="password-new-again" id="" placeholder="Повтор пароля">
   					</div>
   					<div class="admin-container__row">
   						<input class="btn" type="submit" value="Обновить" />
   						<p>
                <?php
                if (($_SERVER['REQUEST_METHOD'] == 'POST')) {
                  $newPass = $_POST['password-new'];
                  $newPassAgain = $_POST['password-new-again'];
                  $oldPass = $_POST['password'];
                  $newLogin = $_POST['admin-login'];
                  $newName = $_POST['admin-name'];
                  if ( $newPass!=null ) {
                    if (( $newPass==$newPassAgain )&&($oldPass==$adminPassword)) {
                      $insertQuery = "UPDATE `admin` SET `password`='$newPass'";
                      Book::queryMysql($insertQuery);
                      echo ("Пароль успешно изменен!");
                    }
                    elseif ($oldPass!=$adminPassword){
                      echo "Неверно введен старый пароль";
                    }
                    else {
                      echo "пароли не совпадают";
                    }


                  }
                  if ( $newLogin!=null ) {
                    $insertQuery = "UPDATE `admin` SET `login`='$newLogin'";
                    Book::queryMysql($insertQuery);
                    echo ("Логин успешно изменен!");
                  }
                  if ( $newName!=null ) {
                    $insertQuery = "UPDATE `admin` SET `name`='$newName'";
                    Book::queryMysql($insertQuery);
                    echo ("Имя успешно изменено!");
                  }
                  if (( $newPassAgain!=null )&&( $newPass==null )) {

                    echo ("Новый пароль нужно ввести дважды!");
                  }
                  if (( $oldPass!=null )&&( $newPass==null )) {

                    echo ("Ведите новый пароль!");
                  }

                }
                 ?>
   						</p>
   				</div>
   			</form>
   			</div>
  </div>
</div>
<?php include("footer_admin.php"); ?>
<?}
else {
    require( "login.php" );
} ?>
