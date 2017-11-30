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
    $this->name = $post['chapter-id'];
    $this->name = $post['chapter-name'];
    $this->text = $post['chapter-text'];
    $select = "SELECT LAST_INSERT_ID()";
    $this->bookId = Book::queryMysql($select);
  }

  public static function updateChapter($posth)
  {
    $idchap = $posth['chapter-id'];
     $nameChapter=$posth['chapter-name'];
     echo($nameChapter);
     $updateQuery = "UPDATE `chapter` SET `name`='$nameChapter' WHERE `id`='$idchap'";
     Book::queryMysql($updateQuery);
  }
}

 ?>
