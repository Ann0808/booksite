<?php include("header_admin.php");
$everything = Book::queryMysql("SELECT * FROM books"); ?>
   <div class="admin-container">
   	<div class="admin-container__items">
  <h2>Basic Table</h2>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>BookName</th>
        <th>logomob</th>
        <th>logodesk</th>
        <th>bookimg</th>
        <th>Author</th>
        <th>Link</th>
        <th>Editbook</th>
        <th>Editchapter</th>
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
      <td><a href="editbook.php">edit book</a></td>
      <td><a href="editchapters.php">edit chapters</a></td>
        </tr>
    <?  } ?>

    </tbody>
  </table>
   	</div>
   </div>
<?php include("footer_admin.php"); ?>
