<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT * FROM books"); ?>
   <div class="admin-container">
   	<div class="admin-container__items">
			<div class="admin-container__item">
			<h2>Basic Table</h2>
				<div class="admin-container__row">
					<div class="col">Id</div>
					<div class="col">BookName</div>
					<div class="col">logomob</div>
					<div class="col">logodesk</div>
					<div class="col">bookimg</div>
					<div class="col">Author</div>
					<div class="col">Link</div>
					<div class="col">Editbook</div>
					<div class="col">Editchapter</div>
				</div>
				<?
						foreach ($everything as $value) { ?>
							<div class="admin-container__row admin-container__row--big">
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
							<div class="col"><a class="showbook__btn" href="editbook.php?id=<?echo $id_redirect; ?>">edit book</a></div>
							<div class="col"><a class="showbook__btn" href="editchapters.php?id=<?echo $id_redirect; ?>">edit chapters</a></div>
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
