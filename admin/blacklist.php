<?php include("settings.php");
session_start();
?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT black_list.id, members.name, members.user
FROM black_list
INNER JOIN members ON black_list.user_id =members.id");

?>


<?php

if (isset($_GET['erase']))
    {
$erase = $_GET['erase'];
			Book::queryMysql("DELETE FROM `black_list` WHERE `id` = '$erase';");
			echo "<script>window.location.href='blacklist'</script>";

    }

 ?>

<div class="admin-container--special">
   <h2>Черный список</h2>
     <div class="blacklist__row">
       <div class="col border-top">id</div>
       <div class="col border-top">Имя</div>
       <div class="col border-top">Логин</div>
       <div class="col border-top"></div>

     </div>
     <?
         foreach ($everything as $value) { ?>
           <div class="blacklist__row">
             <?
               $id_redirect = 0;
               $is_id = true;
             ?>
             <?php foreach ($value as $v) {
               if($is_id) $id_redirect = $v; ?>
               <div class="col">
                <?php echo $v ?>
               </div>
             <? $is_id = false;}  ?>
            <div class="col"><a href="blacklist?erase=<? echo $id_redirect; ?>" class="del">Удалить</a></div>
         </div>
       <?   } ?>

       <div class='admin-container__row'>
           <button onclick='visibleAddPurchase()' class='btn btn--margin'>Добавить пользователя вручную</button>
       </div>

       <div class='admin-container__row admin-container__row'>
           <div class='admin_container__wrapper hidden' id='addNewPurchaseWrapper'>
               <form action='blacklist.php' method='post'>
                   <p>Email пользователя</p>
                   <input class='admin-container__input-text admin-container__input-text--center' type='email' name='user-email'>
                   <input class="btn btn--margin" type="submit" value="Отправить данные" name="submitblack" />
               </form>

           </div>
           <p>
               <?php

if (isset($_POST['submitblack'])) {
$user_email = $_POST['user-email'];
$searchUser = Book::queryMysql("SELECT id FROM members WHERE email='$user_email';");

$rowUser = $searchUser->fetch_array(MYSQLI_ASSOC);
$id_user = $rowUser['id'];
$searchBlack = Book::queryMysql("SELECT * FROM `black_list` WHERE `user_id`='$id_user'");
//$row2 = $searchBook->fetch_array(MYSQLI_ASSOC);
if ($searchUser->num_rows==0)
{
echo "Нет пользователя с таким email!";
} else if($searchBlack->num_rows!=0) {
echo "Этот пользователь уже в черном списке!";
} else {
Book::queryMysql("INSERT INTO `black_list`(`user_id`) VALUES ('$id_user')");

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
