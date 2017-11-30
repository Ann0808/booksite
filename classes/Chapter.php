<?php
/**
 *
 */
class Chapter extends AnotherClass
{
  public $id = null;
  public $name = null;
  public $text = null;
  public $bookId = null;

  function __construct($post)
  {
    $this->name = $post['chapter-name'];
    $this->text = $post['chapter-text'];
    $select = "SELECT LAST_INSERT_ID()";
    $this->bookId = Book::queryMysql($select);
  }
}

 ?>
