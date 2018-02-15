<?php
session_start();
if( !isset( $adminLogin) ) {
  include("settings.php");
}
if ( $_SESSION['adminname'] == $adminLogin):
header( "Location: admin" );
 endif; ?>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Вход в панель администратора</title>
        <script defer src="/js/jquery-3.2.1.min.js"></script>
        <link rel="stylesheet" href="/css/style.min.css">
        <script defer type="text/javascript" src="/js/script.js"></script>
    </head>

    <body class="admin__body">
        <div class="admin-container--special">
                <form action="admin?action=login" method="post">
                    <input type="hidden" name="login" value="true" />
                    <div class="admin-container__row">
                        <p>
                            <label for="username">Username</label>
                        </p>
                        <input class="admin-container__input-text" type="text" name="username" id="username" placeholder="Your admin username" required autofocus maxlength="20" />
                    </div>
                    <div class="admin-container__row">
                        <p>
                            <label for="password">Password</label>
                        </p>
                        <input class="admin-container__input-text" type="password" name="password" id="password" placeholder="Your admin password" required maxlength="20" />
                    </div>
                    <div class="admin-container__row">
                        <input class="btn" type="submit" name="login" value="Login" />
                        <?php if ( isset( $results['errorMessage'] ) ) { ?>
                            <div class="errorMessage">
                                <?php echo $results['errorMessage'] ?>
                            </div>
                            <?php } ?>
                    </div>
                </form>
        </div>
    </body>

    </html>
