<?php
session_start();
$href = "../".$_SESSION['href'];
die("<script>window.location = '$href';</script>");

exit;
 ?>
