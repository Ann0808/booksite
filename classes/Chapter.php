<?php
/**
 *
 */
class Chapter
{
  public $id = null;
  public $name = null;
  public $text = null;
  public $bookId = null;

  function __construct($post)
  {
    //$this->name = $post['chapter-id'];
    $this->name = $post['chapter-name'];
    $this->text = $post['chapter-text'];
    // $select = "SELECT LAST_INSERT_ID()";
    $this->bookId = $post['book-id'];
  }

  public static function updateChapter($posth)
  {
    $idchap = $posth['chapter-id'];
     $nameChapter=$posth['chapter-name'];
     $textChapter=$posth['chapter-text'];
     echo("Отредактировано!");
     $updateQuery = "UPDATE `chapter` SET `name`='$nameChapter',`text`='$textChapter' WHERE `id`='$idchap'";
     Book::queryMysql($updateQuery);
  }

  public function insert() {
  $insertQuery = "INSERT INTO `chapter`(`name`, `text`, `book_id`) VALUES ('$this->name','$this->text','$this->bookId')";
   echo("Добавлено!");
     Book::queryMysql($insertQuery);
  }
}

 ?>
