<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>show books</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
  </head>
  <?php require( "../config.php" ); ?>
  <?php
  $dbhost  = 'localhost';
  $dbname  = 'cms';
  $dbuser  = DB_USERNAME;
  $dbpass  = DB_PASSWORD;
  $admin_name = ADMIN_NAME;
  $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
  if ($mysqli->connect_error) die($mysqli->connect_error);
  $everything = Book::queryMysql("SELECT * FROM books");
  ?>
  <body>
    <div class="container">
  <h2>Basic Table</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>BookName</th>
        <th>logomob</th>
        <th>logodesk</th>
        <th>bookimg</th>
        <th>Author</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <?
      foreach ($everything as $value) { ?>
        <tr>
        <?php foreach ($value as $v) { ?>
          <td>
            <?
            $search = ".jpg";
            if (substr($v, strlen($v) - strlen($search)) == $search) {
              echo "<img src='$v'>";
             }
             else{
               echo $v;
             }

            ?>
          </td>
      <?  } ?>
        </tr>
    <?  } ?>

    </tbody>
  </table>
</div>

  </body>
</html>
