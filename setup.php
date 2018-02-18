<!DOCTYPE html>
<html>
  <head>
    <title>Создание базы данных</title>
  </head>
  <body>

    <h3>Создаем</h3>

<?php
  require_once 'functions.php';

createTable("admin", '`login` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `name` tinytext NOT NULL,
  `yandex_secret` varchar(40) NOT NULL,
  `yandex_money` bigint(15) NOT NULL,
  `email` text NOT NULL,
  `freekassaID` bigint(20) NOT NULL,
  `freekassaSecret` text NOT NULL');

$numAdmin = queryMysql("SELECT * FROM admin");
if ($numAdmin->num_rows==0){
  queryMysql("




  --
  -- Дамп данных таблицы `admin`

  INSERT INTO `admin` (`login`, `password`, `name`, `yandex_secret`, `yandex_money`, `email`, `freekassaID`, `freekassaSecret`) VALUES
  ('admin', 'admin', 'Administrator', 'e2C4zc8z6sRcB1VYrve9ifhe', 410016164611675, 'an.piskunova@yandex.ru', 64939, '8joshplo');

  -- --------------------------------------------------------");
}
createTable("black_list", '
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL');

  createTable("books", "
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `logo-mob` tinytext NOT NULL,
  `logo-desk` tinytext NOT NULL,
  `image` tinytext NOT NULL,
  `author_name` tinytext NOT NULL,
  `link` tinytext NOT NULL,
  `price` int(11) NOT NULL,
  `admin` tinyint(1) DEFAULT '0'");

  createTable("chapter", "
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `text` longtext NOT NULL,
  `book_id` int(11) NOT NULL");


  createTable("members", "
  `id` int(11) NOT NULL,
  `user` varchar(16) NOT NULL,
  `name` varchar(16) NOT NULL,
  `surname` varchar(16) DEFAULT NULL,
  `pass` varchar(16) NOT NULL,
  `email` text NOT NULL");

  createTable("protect", "
  `id` int(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `data` int(12) NOT NULL");

  createTable("purchases", "
  `id` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `id_member` int(11) NOT NULL");

queryMysql("--
-- Индексы таблицы `black_list`
--
ALTER TABLE `black_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);");

queryMysql("
--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);");
queryMysql("
--
-- Индексы таблицы `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`);");
queryMysql("
--
-- Индексы таблицы `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`);");
queryMysql("
--
-- Индексы таблицы `protect`
--
ALTER TABLE `protect`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_member` (`id_member`);");
queryMysql("
--
-- Индексы таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_book` (`id_book`),
  ADD KEY `id_member` (`id_member`);");
  queryMysql("
--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `black_list`
--
ALTER TABLE `black_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;");
  queryMysql("
--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;");
  queryMysql("
--
-- AUTO_INCREMENT для таблицы `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;");
  queryMysql("
--
-- AUTO_INCREMENT для таблицы `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;");
  queryMysql("
--
-- AUTO_INCREMENT для таблицы `protect`
--
ALTER TABLE `protect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;");
  queryMysql("
--
-- AUTO_INCREMENT для таблицы `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;");
  queryMysql("
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `black_list`
--
ALTER TABLE `black_list`
  ADD CONSTRAINT `black_list_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `members` (`id`);
");
queryMysql("
--
-- Ограничения внешнего ключа таблицы `chapter`
--
ALTER TABLE `chapter`
  ADD CONSTRAINT `chapter_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);
  ");
  queryMysql("
--
-- Ограничения внешнего ключа таблицы `protect`
--
ALTER TABLE `protect`
  ADD CONSTRAINT `protect_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `members` (`id`);
  ");
  queryMysql("
--
-- Ограничения внешнего ключа таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`id_member`) REFERENCES `members` (`id`);
  ");


?>

    <br> Успешно.
  </body>
</html>
