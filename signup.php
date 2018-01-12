<? session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Регистрация</title>
    <link rel="stylesheet" href="/css/style.min.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<body class="admin__body">
<?php
		require_once 'functions.php';
    queryMysql("SET NAMES utf8");
		$error = $user = $pass = $name = $email = "";
		if (isset($_SESSION['user'])) destroySession();

		if (isset($_POST['user']))
		{
			$user = sanitizeString($_POST['user']);
			$pass = sanitizeString($_POST['pass']);
			$name = sanitizeString($_POST['name']);
			$email = sanitizeString($_POST['email']);

			if ($user == "" || $pass == ""|| $name == ""|| $email == "")
				$error = "Не все поля заполнены!";
			else
			{
				$result = queryMysql("SELECT * FROM members WHERE user='$user'");
        $resultEmail = queryMysql("SELECT * FROM members WHERE email='$email'");
			if (!preg_match("/^[a-z а-яё]{2,30}$/iu",$name))
			{
				$error = "Убедитесь что Имя содержит от 2 до 30 символов и не содержит цифр!";
			}
			else
				{
				if (!preg_match("/^[a-z0-9]{5,20}$/i",$user))
				{
					$error = "Убедитесь что Логин содержит от 5 до 20 символов, и состоит из латинских символов и цифр!";
				}
				else {
					if ($result->num_rows){
            $error = "Такой логин уже существует!";
          } elseif ($resultEmail->num_rows) {
            $error = "Пользователь с таким email уже существует!";
          }
					else
					{
					queryMysql("INSERT INTO `members` (`user`, `name`, `email`,`pass`) VALUES('$user', '$name', '$email','$pass' )");
					$_SESSION['user'] = $user;
					$_SESSION['pass'] = $pass;
					$_SESSION['name'] = $name;
					$_SESSION['email'] = $email;

					$res = queryMySQL("SELECT id FROM members WHERE user='$user' AND pass='$pass'");
					$row = $res->fetch_array(MYSQLI_ASSOC);
					$id_user = $row['id'];
					$_SESSION['user_id'] = $row['id'];
					$ip = get_the_user_ip();
					$time = time();
					queryMysql("INSERT INTO `protect` (`id_member`, `ip`, `data`) VALUES('$id_user', '$ip', '$time')");
          $textMail = "Здравствуйте!\nБлагодарим вас за регистрацию на сайте " . $_SERVER['HTTP_HOST'] . "\nВаш Логин: " . $user . "\nВаш Пароль: " . $pass;

          mail($email, "Регистрация на сайте", $textMail, $headers);

					if(isset($_SESSION['href'])){
						$href = $_SESSION['href'];
						die("<script>window.location = '$href';</script>");
					}else {
						die("<script>window.location = 'index';</script>");
					}

					}

				}

			}
			}
		}
	?>
							<div class='signup'>
							<h2 class='signup__title'>Регистрация</h2>
							<p>Заполните поля</p>
							<form action='signup' method='post' class='signup__login-form'>
				<p class='signup__error'><? echo $error; echo $ip; echo $time; ?></p>
									<input type='text' class='signup__icon-user' name='user' placeholder='Логин' value='<? echo $user; ?>' onBlur='checkUser(this)'>
					<input type='text' class='signup__icon-user' name='name' placeholder='Имя' value='<? echo $name; ?>'>
					<input type='email' class='signup__icon-user' name='email' placeholder='Email' value='<? echo $email; ?>'>
									<input type='password' class='signup__icon-password' name='pass' placeholder='Пароль' value='<? echo $pass; ?>'>
									<button class='btn signup__enter' type='submit' value='Login'>Зарегистрироваться</button>
							</form>
					</div>
</body>
</html>
