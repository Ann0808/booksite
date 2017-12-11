<?php
require( "../config.php" );
session_start();
if ( $_SESSION['adminname'] == ADMIN_USERNAME):
header( "Location: admin.php" );
 endif; ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> -->
    <!--<link rel="stylesheet" href="/css/bootstrap.min.css">-->
    <script src="/js/jquery-3.2.1.min.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/css/style.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<body class="admin__body">
	<div class="admin-container">
		<div class="admin-container__items">
				<form action="admin.php?action=login" method="post">
					<input type="hidden" name="login" value="true" />
									<div class="admin-container__row">
											<p><label for="username">Username</label></p>
											<input class="admin-container__input-text" type="text" name="username" id="username" placeholder="Your admin username" required autofocus maxlength="20" />
									</div>
									<div class="admin-container__row">
												<p><label for="password">Password</label></p>
												<input class="admin-container__input-text"  type="password" name="password" id="password" placeholder="Your admin password" required maxlength="20" />
									</div>
									<div class="admin-container__row">
												<input class="btn" type="submit" name="login" value="Login" />
												<?php if ( isset( $results['errorMessage'] ) ) { ?>
																<div class="errorMessage"><?php echo $results['errorMessage'] ?></div>
												<?php } ?>
									</div>
				</form>
		</div>

	</div>
</body>
</html>
