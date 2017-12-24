<? session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Регистрация</title>
    <link rel="stylesheet" href="/css/style.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<body class="admin__body">
<?php
		require_once 'functions.php';
		$error = $user = $pass = $name = $surname = "";
		if (isset($_SESSION['user'])) destroySession();

		if (isset($_POST['user']))
		{
			$user = sanitizeString($_POST['user']);
			$pass = sanitizeString($_POST['pass']);
			$name = sanitizeString($_POST['name']);
			$surname = sanitizeString($_POST['surname']);

			if ($user == "" || $pass == ""|| $name == ""|| $surname == "")
				$error = "Не все поля заполнены!";
			else
			{
				$result = queryMysql("SELECT * FROM members WHERE user='$user'");
			if (!preg_match("/^[a-z а-яё]{2,30}$/iu",$name)||!preg_match("/^[a-z а-яё]{2,30}$/iu",$surname))
			{
				$error = "Убедитесь что Имя и Фамилия содержит от 2 до 30 символов и не содержит цифр!";
			}
			else
				{
				if (!preg_match("/^[a-z0-9]{5,20}$/i",$user))
				{
					$error = "Убедитесь что Логин содержит от 5 до 20 символов, и состоит из латинских символов и цифр!";
				}
				else {
					if ($result->num_rows)
					$error = "Такой логин уже существует!";
					else
					{
					queryMysql("INSERT INTO members VALUES('$user', '$name', '$surname','$pass' )");
					$_SESSION['user'] = $user;
					$_SESSION['pass'] = $pass;
					$_SESSION['name'] = $name;
					$_SESSION['surname'] = $surname;

					die("<script>window.location = 'index.php';</script>");
					}

				}

			}
			}
		}
	?>
							<div class='signup'>
							<h2 class='signup__title'>Регистрация</h2>
							<p>Заполните поля</p>
							<form action='signup.php' method='post' class='signup__login-form'>
				<p class='signup__error'><? echo $error; ?></p>
									<input type='text' class='signup__icon-user' name='user' placeholder='Логин' value='<? echo $user; ?>' onBlur='checkUser(this)'>
					<input type='text' class='signup__icon-user' name='name' placeholder='Имя' value='<? echo $name; ?>'>
					<input type='text' class='signup__icon-user' name='surname' placeholder='Фамилия' value='<? echo $surname; ?>'>
									<input type='password' class='signup__icon-password' name='pass' placeholder='Пароль' value='<? echo $pass; ?>'>
									<button class='btn signup__enter' type='submit' value='Login'>Зарегистрироваться</button>
							</form>
					</div>
</body>
</html>
