<?php include("settings.php");
session_start(); ?>
    <?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
        <?php include("header_admin.php");

 ?>

            <div class="admin-container--special">
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
                        <p>Ваш e-mail для связи с клиентами</p>
                        <input class="admin-container__input-text" type="email" name="admin-email" id="" placeholder="vasya@mail.ru">
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
                        <p>Номер яндекс кошелька</p>
                        <input class="admin-container__input-text" type="text" name="admin-yandex-money" id="" placeholder="410011111111111">
                    </div>
                    <div class="admin-container__row margin-bottom">
                        <p class="padding-right">Секретное слово для проверки подлинности <a href="https://money.yandex.ru/sign.xml?retpath=https%3A%2F%2Fmoney.yandex.ru%2Fmyservices%2Fonline.xml"> перейдите по этой ссылке</a>, чтобы узнать его </p>
                        <input class="admin-container__input-text" type="text" name="admin-yandex-secret" id="" placeholder="ThjrWTYJsjSRHFssf">
                    </div>

                    <div class="admin-container__row">
                        <p>ID кошелька freekassa</p>
                        <input class="admin-container__input-text" type="text" name="admin-freekassa-money" id="" placeholder="11111">
                    </div>
                    <div class="admin-container__row">
                        <p>Секретное слово freekassa</p>
                        <input class="admin-container__input-text" type="text" name="admin-freekassa-secret" id="" placeholder="secret">
                    </div>
                    <div class="admin-container__row">
                        <input class="btn btn--margin" type="submit" value="Обновить" />
                        <p>
                            <?php
                if (($_SERVER['REQUEST_METHOD'] == 'POST')) {
                  $newPass = $_POST['password-new'];
                  $newPassAgain = $_POST['password-new-again'];
                  $oldPass = $_POST['password'];
                  $newLogin = $_POST['admin-login'];
                  $newEmail = $_POST['admin-email'];
                  $newName = $_POST['admin-name'];
                  $yandex_secret = $_POST['admin-yandex-secret'];
                  $yandex_money = $_POST['admin-yandex-money'];
                  $freekassa_secret = $_POST['admin-freekassa-secret'];
                  $freekassa_money = $_POST['admin-freekassa-money'];

                  if ( $freekassa_secret!=null ) {
                    $insertQuery = "UPDATE `admin` SET `freekassaSecret`='$freekassa_secret'";
                    queryMysql($insertQuery);
                    echo ("Секрет успешно изменен!");
                  }

                  if ( $freekassa_money!=null ) {
                    $insertQuery = "UPDATE `admin` SET `freekassaID`='$freekassa_money'";
                    queryMysql($insertQuery);
                    echo ("ID freekassa кошелька успешно изменен!");
                  }

                  if ( $newEmail!=null ) {
                    $insertQuery = "UPDATE `admin` SET `email`='$newEmail'";
                    queryMysql($insertQuery);
                    echo ("Email успешно изменен!");
                  }
                    if ( $yandex_secret!=null ) {
                      $insertQuery = "UPDATE `admin` SET `yandex_secret`='$yandex_secret'";
                      queryMysql($insertQuery);
                      echo ("Секрет успешно изменен!");
                    }
                    if ( $yandex_money!=null ) {
                      $insertQuery = "UPDATE `admin` SET `yandex_money`='$yandex_money'";
                      queryMysql($insertQuery);
                      echo ("Яндекс кошелек успешно изменен!");
                    }
                  if ( $newPass!=null ) {
                    if (( $newPass==$newPassAgain )&&($oldPass==$adminPassword)) {
                      $insertQuery = "UPDATE `admin` SET `password`='$newPass'";
                      queryMysql($insertQuery);
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
                    queryMysql($insertQuery);
                    echo ("Логин успешно изменен!");
                  }
                  if ( $newName!=null ) {
                    $insertQuery = "UPDATE `admin` SET `name`='$newName'";
                    queryMysql($insertQuery);
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
            <?php include("footer_admin.php"); ?>
                <?}
else {
    require( "login.php" );
} ?>
