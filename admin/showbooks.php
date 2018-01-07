<?php include("settings.php");
session_start();
?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT * FROM books");

if (isset($_GET['erase'])) // Удаление глав и книги по id
    {
    //  $erase = sanitizeString($_GET['erase']);

			$delBook = Book::queryMysql("SELECT * FROM `books` WHERE `id`='$erase'");
			$rows = $delBook->fetch_array(MYSQLI_ASSOC);
			$image_del=$rows['image'];
			$mob_del=$rows['logo-mob'];
			$desk_del=$rows['logo-desk'];

			unlink("$image_del");
			unlink("$mob_del");
			unlink("$desk_del");

			Book::queryMysql("DELETE FROM chapter WHERE book_id=$erase");
      Book::queryMysql("DELETE FROM books WHERE id=$erase");
			echo "<script>window.location.href='showbooks.php'</script>";

    }

?>
   <div class="admin-container">
   	<div class="admin-container__items">
   	<h2>Книги</h2>
			<div class="showbooks">

				<div class="showbooks__row">
					<div class="col col--border-top col--border-top-mobile">Id</div>
					<div class="col col--border-top">Название</div>
					<div class="col col--border-top">Лого min</div>
					<div class="col col--border-top" >Лого max</div>
					<div class="col col--border-top">Обложка</div>
					<div class="col col--border-top">Автор</div>
					<div class="col col--border-top">Ссылка</div>
					<div class="col col--border-top">Цена</div>
					<div class="col col--border-top">Я автор</div>
					<div class="col col--border-top">Изменить</div>
					<div class="col col--border-top">Del</div>
				</div>
				<?
						foreach ($everything as $value) { ?>
							<div class="showbooks__row">
								<?
									$id_redirect = 0;
									$is_id = true;
								?>
								<?php foreach ($value as $v) {
									if($is_id) $id_redirect = $v;
									 ?>
									<div class="col">
										<?
										$search = ".jpg";
										if (substr($v, strlen($v) - strlen($search)) == $search) {
											echo "<picture><img src='$v'></picture>";
										 }
										 else{
											 echo $v;
										 }

										?>
									</div>
							<?    $is_id = false; } ?>
							<div class="col"><a class="showbook__btn" href="editbook.php?id=<?echo $id_redirect; ?>">Книгу</a><a class="showbook__btn" href="editchapters.php?id=<?echo $id_redirect; ?>">Главу</a></div>
							<div class="col"><a href="showbooks.php?erase=<? echo $id_redirect; ?>" class="del">Удалить</a></div>
						</div>
					<?  } ?>
			</div>
   	</div>
   </div>

   <script>
		 jQuery(function ($) {
				function fix_size() {
						var images = $('.col img');
						images.each(setsize);

						function setsize() {
								var img = $(this),
										img_dom = img.get(0),
										container = img.parents('.col');
								if (img_dom.complete) {
										resize();
								} else img.one('load', resize);

								function resize() {
										if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
												img.width('100%');
												img.height('auto');
												return;
										}
										img.height('100%');
										img.width('auto');
								}
						}
				}
				$(window).on('resize', fix_size);
				fix_size();
		});

	</script>

<?php include("footer_admin.php"); ?>

<?}
else {
    require( "login.php" );
} ?>
