<? session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Войти</title>
    <link rel="stylesheet" href="/css/style.css">
    <script type="text/javascript" src="/js/script.js"></script>
</head>
<body class="admin__body">
 <?php
  require_once 'functions.php';
  $error = $user = $pass = "";

  if (isset($_POST['user']))
  {
    $user = sanitizeString($_POST['user']);
    $pass = sanitizeString($_POST['pass']);

    if ($user == "" || $pass == "")
        $error = "Не все поля заполнены!";
    else
    {
      $result = queryMySQL("SELECT * FROM members
        WHERE user='$user' AND pass='$pass'");
		$row = $result->fetch_array(MYSQLI_ASSOC);
      if ($result->num_rows == 0)
      {
        $error = "Неверное имя или пароль!";
      }
      else
      {
        $_SESSION['user'] = $user;
        $_SESSION['pass'] = $pass;
				$_SESSION['user_id'] = $row['id'];

				$id_user = $row['id'];
				$ip = get_the_user_ip();
				$time = time();
				$lastday = $time - (24*60*60);
				$search = queryMysql("SELECT * FROM protect WHERE id_member='$id_user' AND ip='$ip'");
				if (!$search->num_rows) {
					queryMysql("INSERT INTO `protect` (`id_member`, `ip`, `data`) VALUES('$id_user', '$ip', '$time')");
				}else {
					echo "Privret";
				}

        $countSQL = queryMysql("SELECT COUNT(*) AS count FROM `protect` WHERE data>'$lastday' AND `id_member`='$id_user'");
        $r = $countSQL->fetch_array(MYSQLI_ASSOC);
        $count = $r['count'];
        $s= queryMysql("SELECT * FROM `black_list` WHERE `user_id`='$id_user'");
        if (($count>3)&&(!$s->num_rows)) {
          queryMysql("INSERT INTO `black_list` ( `user_id`) VALUES ('$id_user')");
        }

			if(isset($_SESSION['href'])){
				$href = $_SESSION['href'];
				die("<script>window.location = '$href';</script>");
			}else {
				die("<script>window.location = 'index';</script>");
			}

      }

    }
  }
							if(isset($_SESSION['user'])){
?>
            		<div class='signup'>
									<h2 class='signup__title'>Вы уже вошли</h2>
									<a href="index" class="link">На главную</a>
									<a href="signout" class="link">Выйти</a>
								</div>
						<?	} else {
          ?>
           <div class='signup'>
            <h2 class='signup__title'>Вход в личный кабинет</h2>
            <p>Введите свой логин и пароль</p>
            <form action='signin' method='post' class='signup__login-form'>
								<p class='signup__error'><? echo $error; echo $count; ?></p>
                <input type='text' class='signup__icon-user' name='user' placeholder='Логин' value='<? echo $user; ?>'>
                <input type='password' class='signup__icon-password' name='pass' placeholder='Пароль' value='<? echo $pass; ?>'>
                <button class='btn signup__enter' type='submit' value='Login'>Войти</button>
                <a href="signup" class="link">Зарегистрироваться</a>
            </form>
        </div>
      <? } ?>
        </body>
</html>
