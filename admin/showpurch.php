<?php include("settings.php");
session_start();
?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT members.name, members.user, books.name, books.price
FROM purchases
INNER JOIN members ON purchases.id_member =members.id
INNER JOIN books ON purchases.id_book =books.id;");

?>

<div class="admin-container">
 <div class="admin-container__items">
   <div class="admin-container__item">
   <h2>Basic Table</h2>
     <div class="admin-container__row">
       <div class="purchases-col">UserNAme</div>
       <div class="purchases-col">UserLogin</div>
       <div class="purchases-col">BookName</div>
       <div class="purchases-col">BookCost</div>
     </div>
     <?
         foreach ($everything as $value) { ?>
           <div class="admin-container__row admin-container__row--big">
             <?php foreach ($value as $v) { ?>
               <div class="purchases-col">
                <?php echo $v ?>
               </div>
             <? }  ?>

         </div>
       <?  } ?>
   </div>
 </div>
</div>



<?php include("footer_admin.php"); ?>
<?}
else {
    require( "login.php" );
} ?>
