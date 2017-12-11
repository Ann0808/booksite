<?php require_once( "../config.php" );
session_start(); ?>
<?php if ( $_SESSION['adminname'] == ADMIN_USERNAME) { ?>
<?php include("header_admin.php"); ?>
<div class="admin-container">
  <div class="admin-container__items">
    <div class="admin-container__item">
   			<form action="editadmin.php" method="post">
   				<div class="admin-container__row">
   						<p>Старый пароль</p>
   						<input class="admin-container__input-text" type="password" name="password" id="" placeholder="Старый пароль">
   					</div>
   					<div class="admin-container__row">
   						<p>Полное имя</p>
   						<input class="admin-container__input-text" type="text" name="admin-name" id="" placeholder="Аркадий Афанасьевич Фет">
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
