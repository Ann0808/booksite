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
  // public function __construct($name, $logoMobile, $logoDesktop, $logoBook, $author, $link)
  // {
  //   $this->name = $name;
  //   $this->logoMobile = $logoMobile;
  //   $this->logoDesktop = $logoDesktop;
  //   $this->logoBook = $logoBook;
  //   $this->author = $author;
  //   $this->link = $link;
  // }
  public function __construct($data, $files)
  {
    $path = '../img/';
    $ext = array_pop(explode('.',$files['picture-mobile']['name']));
    $this->link = $data['book-link'];
    // $new_mobile_logo_name = $path . 'mobile-logo-'. $link . '.' . $ext;
    // $new_desktop_logo_name = $path . 'desktop-logo-'. $link . '.' . $ext;
    // $new_book_logo_name = $path . 'book-logo-'. $link . '.' . $ext;
    $this->name = $data['book-name'];
    $this->logoMobile = $path . 'mobile-logo-'. $this->link . '.' . $ext;
    $this->logoDesktop = $path . 'desktop-logo-'. $this->link . '.' . $ext;
    $this->logoBook = $path . 'book-logo-'. $this->link . '.' . $ext;
    $this->author = $data['book-author'];
  }

  public function insert() {
    $insertQuery = "INSERT INTO `books`(`name`, `logo-mob`, `logo-desk`, `image`,`author_name`,`link`) VALUES ('$this->name','$this->logoMobile','$this->logoDesktop','$this->logoBook','$this->author','$this->link')";
     queryMysql($insertQuery);
  }
}


 ?>
