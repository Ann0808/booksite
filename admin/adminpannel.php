<?php
 include("header_admin.php"); ?>

<div class="admin-container admin-container--instruction">
<h2 class = "admin-title">Документация</h2>
<div class="instruction">
  <h3>Настройка данных администратора</h3>
  <ol>
      <li>Зайдите в раздел "Мои настройки"</li>
      <li>Введите имя</li>
      <li>Введите логин (латинские символы), <i>например administrator</i></li>
      <li>Введите Вашу рабочую электронную почту</li>
      <li>Смените пароль:</li>
      <p>Если ранее Вы не изменяли пароль, то в поле "Старый пароль" введите admin</p>
      <p>Если ранее Вы уже изменяли пароль, то введите прошлый пароль</p>
      <p>Придумайте новый пароль и введите его дважды: в поле "Новый пароль" и "Повтор пароля"</p>
      <li>Нажмите "ОБНОВИТЬ"</li>
    </ol>
    <h3>Настройка яндекс-кошелька:</h3>
    <ol>
      <li>Зарегистрируйтесь в сервисе Яндекс-Деньги <a href="https://money.yandex.ru/">перейти в сервис</a>
      </li>
      <p>Если аккаунт уже создан, войдите</p>
      <li>Пройдите идентификацию кошелька:</li>
        <ul>
          <li>Перейдите по <a href="https://money.yandex.ru/id">ссылке</a></li>
          <li>Нажмите на "Пройти идентификацию" (на фото ниже кнопка обведена красным)</li>
        </ul>
      <p><img src="../img/standart/yandex_screen.png" alt="" width="100%"></p>
      <li>Узнайте секретное слово яндекс-кошелька</li>
      <ul>
        <li>Для этого перейдите по <a href="https://money.yandex.ru/myservices/online.xml">ссылке</a></li>
        <li>Нажмите кнопку "Показать секрет"</li>
        <li>Скопируйте открытый набор символов</li>
      </ul>
      <li>Вставьте скопированные символы в поле "Секретное слово для проверки подлинности"</li>
      <li>Нажмите "ОБНОВИТЬ"</li>
    </ol>
    <h3>Настройка кошелька freekassa</h3>
    <ol>
      <li>Перейдите на сайт freekassa: <a href="http://www.free-kassa.ru/cabinet/v2/register">перейти</a></li>
      <li>Заполните открывшуюся форму (ниже показан пример):</li>
      <p><img src="../img/standart/register_screen.png" alt="" width="100%"></p>
      <li>Нажмите кнопку "Зарегистрировать"</li>
      <li>Откроется страница "Вход в кабинет", введите свой email и пароль и войдите</li>
      <li>Скопируйте ID кошелька (только цифры), на фото обведен синим:</li>
      <p><img src="../img/standart/merchant_screen.png" alt="" width="100%"></p>
      <li>Вставьте скопированный ID поле "ID кошелька freekassa": </li>
      <p><img src="../img/standart/admin_screen.png" alt="" width="100%"></p>
      <li>Зайдите в настройки кассы, для этого перейдите по <a href="http://www.free-kassa.ru/cabinet/v2/settings">ссылке</a></li>
      <li>Сгенерируйте секретные слова, кликнув на кнопки, выделенные на фото ниже желтым цветом:</li>
      <p><img src="../img/standart/secret_screen.png" alt="" width="100%"></p>
      <li>Скопируйте ПЕРВОЕ секретное слово и вставьте в поле "Секретное слово freekassa": </li>
      <p><img src="../img/standart/admin_screen2.png" alt="" width="100%"></p>
      <li>Нажмите "ОБНОВИТЬ"</li>
      <li>На сайте freekassa выберите метод оповещения POST, URL оповещения СсылкаНаВашСайт/event/Freekassa.php , URL возврата в случае успеха СсылкаНаВашСайт/form/freekassa.php , URL возврата в случае неудачи СсылкаНаВашСайт/form/fail.php</li>
      <p>Например, если домен Вашего сайта books.ru, то вставляете http://books.ru/event/Freekassa.php , http://books.ru/form/freekassa.php и http://books.ru/form/fail.php</p>
      <p><img src="../img/standart/merchant_screen2.png" alt="" width="100%"></p>
      <li>Нажмите "сохранить" </li>
      <li>Нажмите на слово "установите" (на фотографии ниже выделено желтым)</li>
      <p><img src="../img/standart/activate_screen2.png" alt="" width="100%"></p>
      <li>В открывшемся окне нажмите кнопку "проверить", закройте окно</li>
      <li>Нажмите кнопку "Активировать" (на фотографии ниже обведена синим)</li>
      <p><img src="../img/standart/activate_screen.png" alt="" width="100%"></p>
      <li>Активация может занять некоторое время, сайт будет проверяться модераторами, в случае успеха Вы увидите такую надпись: </li>
      <p><img src="../img/standart/activate_screen3.png" alt="" width="100%"></p>
      <p>В случае неудачи пишите в техподдержку сайта freekassa и узнавайте у них причины блокировки сайта.</p>
    </ol>

</div>
<div class="instruction">
  <h3>Добавление книги</h3>
  <ol>
      <li>Зайдите в раздел "Добавить книгу"</li>
      <p>Для каждой книги предварительно должны быть подготовлены: логотипы для мобильной и десктопной версии, обложка в формате jpg</p>
      <p>Обратите внимание на то, что обложка книги в высоту должна быть не менее 400px, а ширина должна быть мнеьше высоты</p>
      <ul>
        <li>Нажмите на ссылку для сжатия (на фото ниже выделена желтым)</li>
        <p><img src="../img/standart/addbook_screen.png" alt="" width="100%"></p>
        <li>В открывшемся сайте нажмите "Загрузить", выберите логотип мобильной версии, затем снова нажмите "Загрузить", выберите логотип десктопной версии, таким же образом загрузите обложку книги, дождитесь загрузки, нажмите "Скачать все"</li>
        <p><img src="../img/standart/addbook_screen2.png" alt="" width="100%"></p>
        <li>Распакуйте скачанный архив в специальную папку</li>
      </ul>
      <li>Нажмите "Выбрать" (на фото ниже показано синей стрелкой), в открывшемся окне выберите папку, в которую распаковали архив со сжатыми файлами, в ней кликните по логотипу для мобильной версии, нажмите "Открыть"</li>
      <p>Затем на "Выбрать", показанное красной стрелкой и в открывшемся окне кликните по логотипу для десктопной версии, нажмите "Открыть"</p>
      <p>Затем на "Выбрать", показанное зеленой стрелкой и в открывшемся окне кликните по обложке книги, нажмите "Открыть"</p>

      <p><img src="../img/standart/addbook_screen3.png" alt="" width="100%"></p>
    <li>Введите название книги, Имя автора, название латинскими символами без пробелов, цену книги (только число)</li>
    <p>Например, если книга называется "Заработок дома", то в поле "Название книги транслитом" пишите "zarabotok-doma"</p>
      <p><img src="../img/standart/addbook_screen4.png" alt="" width="100%"></p>
      <p>Если Вы являетесь автором книги, кликните по окошку "Вы автор книги"  (на фото ниже обведено зеленым)</p>
      <p><img src="../img/standart/addbook_screen5.png" alt="" width="100%"></p>
      <li>Нажмите "Отправить данные"</li>
  </ol>
  <h3>Редактирование книги, удаление книги</h3>
  <ol>
    <li>Зайдите в раздел "Все книги"</li>
    <li>Найдите нужную книгу и нажмите ссылку "книгу" в столбце "изменить" (на фото ниже обведена зеленым)</li>
    <p><img src="../img/standart/editbook_screen.png" alt="" width="100%"></p>
    <li>Редактируйте любые из открывшихся полей, затем нажмите "применить изменения"</li>
    <li>Чтобы удалить книгу, нажмите на крестик в последнем столбце</li>
  </ol>
  <h3>Добавление, редактирование и удаление глав</h3>
  <ol>
    <li>Зайдите в раздел "Все книги"</li>
    <li>Найдите нужную книгу и нажмите ссылку "главы" в столбце "изменить" (на фото ниже обведена синим)</li>
    <p><img src="../img/standart/editbook_screen2.png" alt="" width="100%"></p>
    <li>Для добавления главы нажмите "Добавить новую главу"</li>
    <li>В открывшемся редакторе введите название главы и её текст</li>
    <p>На фото зеленым обведен выбор размера шрифта, желтым - цвет шрифта, красный - вставка видео, синий - вставка изображения</p>
    <p><img src="../img/standart/editbook_screen3.png" alt="" width="100%"></p>
    <ul>
      <li>Чтобы вставить фото, нажмите на обведенный синим значок и в появившемся окне выберите нужную фотографию, нажмите "Открыть"</li>
      <li>Чтобы вставить фото, нажмите на обведенный синим значок и в появившемся поле вставьте ссылку на youtube видео (поле выделено желтым на фото ниже), нажмите "Enter" на клавиатуре</li>
        <p><img src="../img/standart/video_screen.png" alt="" width="100%"></p>

    </ul>
    <li>Нажмите "Добавить", обновите страницу</li>
    <li>Зайдите в раздел "Все книги"</li>
    <li>Найдите нужную книгу и нажмите ссылку "главы" в столбце "изменить"</li>
    <li>Чтобы отредактировать главу, выберите из списка нужную, кликните по ней</li>
      <p><img src="../img/standart/editchapter_screen.png" alt="" width="100%"></p>
      <li>Откроется 2 поля, каждое из которых можно отредактировать, после редактирования нажмите "обновить" (обведена синим на фото ниже)</li>
      <p>Чтобы удалить главу, нажмите на крестик (обведен красным на фото)</p>
      <p><img src="../img/standart/editchapter_screen2.png" alt="" width="100%"></p>
  </ol>
  <h3>Все покупки</h3>
  <ul>
    <li>В данном разделе показаны все осуществленные покупки на Вашем сайте</li>
    <li>Чтобы вручную дать пользователю доступ к какой-либо книге, нажмите кнопку "Добавить покупку вручную" (на фото ниже обведена желтым)</li>
    <p>Введите email пользователя и id книги, который вы можете посмотреть в разделе "Все книги" (Первый столбец), нажмите "Отправить данные"</p>
    <p><img src="../img/standart/adduser_screen.png" alt="" width="100%"></p>
  </ul>
  <h3>Черный список</h3>
  <ul>
    <li>В данном разделе показаны пользователи, добавленные в черный список. Пользователь добавляется в черный список автоматически, если его аккаунт заподозрен в использовании несколькими пользователями</li>
    <li>Чтобы вручную дать добавить пользователя в черный список, нажмите кнопку "Добавить пользователя вручную" (на фото ниже обведена желтым)</li>
    <p>Введите email пользователя, нажмите "Отправить данные"</p>
    <li>Чтобы удалить пользователя из черного списка, нажмите на крестик в последнем столбце рядом с его логином</li>
    <p><img src="../img/standart/adduser_screen2.png" alt="" width="100%"></p>
  </ul>

</div>

</div>

<?php include("footer_admin.php"); ?>
