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

if (isset($_GET['erase'])) // Удаление глав и книги по id
    {
$erase = $_GET['erase'];
			Book::queryMysql("DELETE FROM `black_list` WHERE `id` = '$erase';");
			echo "<script>window.location.href='blacklist.php'</script>";

    }

 ?>

<div class="admin-container">
 <div class="admin-container__items">
   <div class="admin-container__item">
   <h2>Black List</h2>
     <div class="admin-container__row">
       <div class="col">id</div>
       <div class="col">UserNAme</div>
       <div class="col">UserLogin</div>
       <div class="col">delete from black list</div>

     </div>
     <?
         foreach ($everything as $value) { ?>
           <div class="admin-container__row admin-container__row--big">
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
            <div class="col"><a href="blacklist.php?erase=<? echo $id_redirect; ?>" class="del">Удалить</a></div>
         </div>
       <?   } ?>
   </div>
 </div>
</div>



<?php include("footer_admin.php"); ?>
<?}
else {
    require( "login.php" );
} ?>
