<?php
/**
 *
 */
class Book
{
   public $id = null;
   public $name = null;
   public $logoMobile = null;
   public $logoDesktop = null;
   public $logoBook = null;
   public $author = null;
   public $link = null;

  public function __construct($data, $files)
  {
    $path = '../img/';
     //$ext = array_pop(explode('.',$files['picture-mobile']['name']));
    if ( isset( $data['book-id'] ) ) $this->id = $data['book-id'];
    $ext = "jpg";
    if ( isset( $data['book-link'] ) )$this->link = $data['book-link'];
    if ( isset( $data['book-name'] ) )$this->name = $data['book-name'];
    if ( isset( $data['book-link'] ) )$this->logoMobile = $path . 'mobile-logo-'. $this->link . '.' . $ext;
    if ( isset( $data['book-link'] ) )$this->logoDesktop = $path . 'desktop-logo-'. $this->link . '.' . $ext;
    if ( isset( $data['book-link'] ) )$this->logoBook = $path . 'book-logo-'. $this->link . '.' . $ext;
    if ( isset( $data['book-author'] ) )$this->author = $data['book-author'];
  }

  public function insert() {
    $insertQuery = "INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$this->name','$this->logoMobile','$this->logoDesktop','$this->logoBook','$this->author','$this->link')";
     Book::queryMysql($insertQuery);
  }

  public function update() {
    if($this->name!=null){
      $insertQuery = "UPDATE `books` SET `name`='$this->name' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
    if($this->logoMobile!=null){
      $insertQuery = "UPDATE `books` SET `logo-mob`='$this->logoMobile' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
    if($this->logoDesktop!=null){
      $insertQuery = "UPDATE `books` SET `logo-desk`='$this->logoDesktop' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
    if($this->logoBook!=null){
      $insertQuery = "UPDATE `books` SET `image`='$this->logoBook' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
    if($this->author!=null){
      $insertQuery = "UPDATE `books` SET `author_name`='$this->author' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
    if($this->link!=null){
      $insertQuery = "UPDATE `books` SET `link`='$this->link' WHERE `id`='$this->id'";
       Book::queryMysql($insertQuery);
    }
  }



  public static function queryMysql($query)
    {
      global $mysqli;
      $result = $mysqli->query($query);
      if (!$result) die($mysqli->error);
      return $result;
    }
}
 ?>
