<?php include("settings.php");
session_start();
?>
    <?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
        <?php include("header_admin.php");
$everything = Book::queryMysql("SELECT  members.name, members.email , books.name AS n, books.price
FROM purchases
INNER JOIN members ON purchases.id_member =members.id
INNER JOIN books ON purchases.id_book =books.id
;");

?>

            <div class="admin-container--special">
                <h2>Все покупки</h2>
                <div class="admin-container__row start admin-container__row--central admin-container__row--special">
                    <div class="purchases-col border-top"><b>Имя пользователя</b></div>
                    <div class="purchases-col border-top"><b>Email пользователя</b></div>
                    <div class="purchases-col border-top"><b>Название книги</b></div>
                    <div class="purchases-col border-top"><b>Цена книги</b></div>
                </div>
                <?  foreach ($everything as $value) { ?>
                    <div class="admin-container__row start admin-container__row--central admin-container__row--special">
                        <?php foreach ($value as $v) { ?>
                            <div class="purchases-col">
                                <?php echo $v ?>
                            </div>
                            <? }  ?>
                    </div>
                    <? } ?>
                        <div class='admin-container__row'>
                            <button onclick='visibleAddPurchase()' class='btn btn--margin'>Добавить покупку вручную</button>
                        </div>
                        <div class='admin-container__row admin-container__row'>
                            <div class='admin_container__wrapper hidden' id='addNewPurchaseWrapper'>
                                <form action='showpurch.php' method='post'>
                                    <p>Email пользователя</p>
                                    <input class='admin-container__input-text admin-container__input-text--center' type='email' name='user-email'>
                                    <p>ID книги (смотрите в разделе <a href="showbooks.php">все книги</a>)</p>
                                    <input class='admin-container__input-text admin-container__input-text--center' type='text' name='purch-book-id'>
                                    <input class="btn btn--margin" type="submit" value="Отправить данные" name="submit" />
                                </form>

                            </div>
                            <p>
                                <?php

    if (isset($_POST['submit'])) {
      $user_email = $_POST['user-email'];
      $purch_book_id = $_POST['purch-book-id'];
      $searchUser = Book::queryMysql("SELECT id FROM members WHERE email='$user_email';");
      $searchBook = Book::queryMysql("SELECT id FROM books WHERE id='$purch_book_id';");

      $rowUser = $searchUser->fetch_array(MYSQLI_ASSOC);
      $id_user = $rowUser['id'];
      $searchPurch = Book::queryMysql("SELECT * FROM `purchases` WHERE `id_book`='$purch_book_id' AND `id_member`='$id_user'");
      //$row2 = $searchBook->fetch_array(MYSQLI_ASSOC);
      if ($searchUser->num_rows==0)
      {
          echo "Нет пользователя с таким email!";
      } else if($searchBook->num_rows==0) {
          echo "Нет книги с таким id!";
      } else if($searchPurch->num_rows!=0) {
        echo "Эта покупка уже зарегистрирована!";
      } else {
        Book::queryMysql("INSERT INTO `purchases`(`id_book`, `id_member`) VALUES ('$purch_book_id','$id_user')");

        echo "Добавлено! Обновите страницу.";
      }

    }

     ?>
                            </p>
                        </div>
            </div>

            <?php include("footer_admin.php"); ?>
                <?}
else {
    require( "login.php" );
} ?>
