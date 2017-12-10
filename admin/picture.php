<?php

function picture_book ($name) {
	list($w, $h) = getimagesize($name);
	$max = 400;
	$tw = $w;
	$th = $h;

	$src = imagecreatefromjpeg($name);

	$tw = $max / $h * $w;
	$th = $max;


	$tmp = imagecreatetruecolor($tw, $th);
	imagecopyresampled($tmp, $src, 0, 0, 0, 0, $tw, $th, $w, $h);
	imageconvolution($tmp, array(array(–1, –1, –1),
	array(–1, 16, –1), array(–1, –1, –1)), 8, 0);
	imagejpeg($tmp, $name);
	imagedestroy($tmp);
	imagedestroy($src);
}

?>
