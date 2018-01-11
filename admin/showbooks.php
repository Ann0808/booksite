<?php include("settings.php");
session_start();
?>
<?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT * FROM books");

if (isset($_GET['erase'])) // Удаление глав и книги по id
    {
    $erase = $_GET['erase'];

			$delBook = Book::queryMysql("SELECT * FROM `books` WHERE `id`='$erase'");
			$rows = $delBook->fetch_array(MYSQLI_ASSOC);
			$image_del=$rows['image'];
			$mob_del=$rows['logo-mob'];
			$desk_del=$rows['logo-desk'];

			unlink("$image_del");
			unlink("$mob_del");
			unlink("$desk_del");

			Book::queryMysql("DELETE FROM chapter WHERE book_id=$erase");
      Book::queryMysql("DELETE FROM purchases WHERE id_book=$erase");
      Book::queryMysql("DELETE FROM books WHERE id=$erase");
			echo "<script>window.location.href='showbooks.php'</script>";

    }

?>
   <div class="admin-container--special">
   	<h2>Книги</h2>
			<div class="showbooks">

				<div class="showbooks__row">
					<div class="col col--border-top col--small">Id</div>
					<div class="col col--border-top col--small">Название</div>
					<div class="col col--border-top col--small">Лого min</div>
					<div class="col col--border-top col--small" >Лого max</div>
					<div class="col col--border-top col--small">Обложка</div>
					<div class="col col--border-top col--small">Автор</div>
					<div class="col col--border-top col--small">Ссылка</div>
					<div class="col col--border-top col--small">Цена</div>
					<div class="col col--border-top col--small">Моя*</div>
					<div class="col col--border-top col--small">Изменить</div>
					<div class="col col--border-top col--small"></div>
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
							<div class="col"><a class="showbook__btn" href="editbook.php?id=<?echo $id_redirect; ?>">Книгу</a><hr><a class="showbook__btn" href="editchapters.php?id=<?echo $id_redirect; ?>">Главы</a></div>
							<div class="col"><a data-book ='<? echo $id_redirect; ?>' class="del" onclick="deleteBook(this)">Удалить</a></div>
						</div>
					<?  } ?>
					<span class="admin-container__addition">* 1-если вы являетесь автором книги, иначе - 0</span>
			</div>
   </div>

   <div class="modal-content modal-content--close">
   	<p>Вы действительно хотите удалить книгу?</p>
    <a class="modal-content__close" onclick='closeModalContent(this)'>Отменить</a>
    <a href="#" class="btn-uniq"></a>
   </div>
   <div class="modal-overlay"></div>

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
