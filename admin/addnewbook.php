<?php include("settings.php");
session_start(); ?>
    <?php if ( $_SESSION['adminname'] == $adminLogin) { ?>
        <?php include("header_admin.php");

?>


            <div class="admin-container--special">

                <form enctype="multipart/form-data" method="post" action="addnewbook.php" id="formupload">
                    <div class="admin-container__block">
                        <span class="admin-container__addition">Все изображения должны быть в формате jpg</span>
                        <div class="admin-container__row">
                            <p>Логотип для мобильной версии
                            <br><span class="admin-container__addition">Изображение должно быть в горизонтальной ориентации. </span></p>

                            <div class="file_upload btn">
                                Выбрать
                                <input placeholder="mobile" name="picture-mobile" type="file" />
                            </div>
                        </div>
                        <div class="admin-container__row">
                            <p>Логотип для десктопной версии
                              <br><span class="admin-container__addition">Изображение должно быть в горизонтальной ориентации.</span></p>

                            <div class="file_upload btn">
                                Выбрать
                                <input name="picture-desktop" type="file" />
                            </div>
                        </div>
                        <div class="admin-container__row">
                            <p>Книжная обложка
                                <br><span class="admin-container__addition">Изображение должно быть высотой более 400px и в вертикальной ориентации. Желательное соотношение сторон 1:1.6 (ширина:длина).</span></p>
                            <div class="file_upload btn">
                                Выбрать
                                <input name="picture-book" type="file" />
                            </div>
                        </div>
                    </div>
                    <div class="admin-container__block">
                        <div class="admin-container__row">
                            <p>Название книги</p>
                            <input class="admin-container__input-text" type="text" name="book-name" id="" placeholder="Война и мир">
                        </div>
                        <div class="admin-container__row">
                            <p>Автор книги</p>
                            <input class="admin-container__input-text" type="text" name="book-author" id="" placeholder="Вася Пупкин">
                        </div>

                        <div class="admin-container__row">
                            <p>Ссылка на книгу<br><span class="admin-container__addition">Только латинские символы, дефис и нижнее подчеркивание</span></p>
                            <input class="admin-container__input-text" type="text" name="book-link" id="" placeholder="book-name">
                        </div>
                        <div class="admin-container__row">
                            <p>Цена книги в рублях</p>
                            <input class="admin-container__input-text" type="number" step="1" min="0" max="1000000" name="book-price" id="" placeholder="50">
                        </div>
                        <div class="admin-container__row">
                            <label class="checkbox">Вы автор книги
                                <input type="checkbox" name="book-is-admin" value="a1"><span class="checkbox-indicator"></span></label>
                        </div>
                    </div>

                        <input class="btn btn--margin" type="submit" value="Отправить данные" name="submit"  >
                        <div class="progress">
                            <div><p id="info" class="info"></p></div>
                        </div>

                </form>
            </div>


            <script type="text/javascript" src="../js/editAddBook.js">

            </script>
            <?php include("footer_admin.php"); ?>
                <?}
else {
    require( "login.php" );
} ?>
