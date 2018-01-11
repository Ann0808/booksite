<?php
/**
 *
 */
 require_once ('../functions.php');
class Book
{
   public $id = null;
   public $name = null;
   public $logoMobile = null;
   public $logoDesktop = null;
   public $logoBook = null;
   public $author = null;
   public $link = null;
	 public $price = null;
   public $isAdmin = false;

  public function __construct($data, $files)
  {
    $path = '../img/';
     //$ext = array_pop(explode('.',$files['picture-mobile']['name']));
    if ( isset( $data['book-id'] ) ) $this->id = $data['book-id'];
    $ext = "jpg";
    if ( isset( $data['book-link'] ) )$this->link = $data['book-link'];
    if ( isset( $data['book-name'] ) )$this->name = $data['book-name'];
    if ( $files['picture-mobile']['tmp_name']!=null )$this->logoMobile = $path . 'mobile-logo-'. time() . '.' . $ext;
    if (  $files['picture-desktop']['tmp_name']!=null )$this->logoDesktop = $path . 'desktop-logo-'. time() . '.' . $ext;
    if ( $files['picture-book']['tmp_name']!=null )$this->logoBook = $path . 'book-logo-'. time() . '.' . $ext;
    if ( isset( $data['book-author'] ) )$this->author = $data['book-author'];
		if ( isset( $data['book-price'] ) )$this->price = $data['book-price'];
    if ( isset( $data['book-is-admin'] ) )$this->isAdmin = true;
  }

  public function insert() {
    $insertQuery = "INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`,`price`,`admin`) VALUES ('$this->name','$this->logoMobile','$this->logoDesktop','$this->logoBook','$this->author','$this->link','$this->price','$this->isAdmin')";
     queryMysql($insertQuery);
  }

  public function update() {
    $insertQuery = "UPDATE `books` SET `admin`='$this->isAdmin' WHERE `id`='$this->id'";
     queryMysql($insertQuery);

    if($this->isAdmin!=null){
      $insertQuery = "UPDATE `books` SET `admin`='$this->isAdmin' WHERE `id`='$this->id'";
      queryMysql($insertQuery);
    }
    if($this->name!=null){
      $insertQuery = "UPDATE `books` SET `name`='$this->name' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
    if($this->logoMobile!=null){
      $insertQuery = "UPDATE `books` SET `logo-mob`='$this->logoMobile' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
    if($this->logoDesktop!=null){
      $insertQuery = "UPDATE `books` SET `logo-desk`='$this->logoDesktop' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
    if($this->logoBook!=null){
      $insertQuery = "UPDATE `books` SET `image`='$this->logoBook' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
    if($this->author!=null){
      $insertQuery = "UPDATE `books` SET `author_name`='$this->author' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
    if($this->link!=null){
      $insertQuery = "UPDATE `books` SET `link`='$this->link' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
		if($this->price!=null){
      $insertQuery = "UPDATE `books` SET `price`='$this->price' WHERE `id`='$this->id'";
       queryMysql($insertQuery);
    }
  }



  // public static function queryMysqli($query)
  //   {
  //     global $mysqli;
  //     $result = $mysqli->query($query);
  //     if (!$result) die($mysqli->error);
  //     return $result;
  //   }
}
 ?>
