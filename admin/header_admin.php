<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin panel</title>
    <link rel="stylesheet" href="../css/style.css">
		<script src="../js/jquery-3.2.1.min.js"></script>

  </head>
  <body class="admin__body">
    <div class="admin-container">
    	<h1 class="admin-title">Добро пожаловать, <?php echo  $adminName; ?></h1>
			<a class="btn" href="../index.php">На главную</a>
			<a class="btn" href="admin.php?action=logout">Выйти</a>
    </div>
    <div class="admin-container">
			<div class="admin-menu">
					<li><a href="admin.php"  class="btn" >Моя страница</a></li>
					<li><a href="addnewbook.php"  class="btn">Добавить книгу</a></li>
					<li><a href="showbooks.php"  class="btn">Все книги</a></li>
          <li><a href="showpurch.php"  class="btn">Все покупки</a></li>
          <li><a href="blacklist.php"  class="btn">Черный список</a></li>
					<li><a href="editadmin.php"  class="btn">Мои настройки</a></li>
			</div>
		</div>
