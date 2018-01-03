<?php require( "../config.php" );
 $adminYandex  = ADMIN_YANDEX; ?>

<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
    <input type="hidden" name="receiver" value="<?echo $adminYandex;?>">
    <input type="hidden" name="label" value="62" data-type="number">
    <input type="hidden" name="sender" value="2">
    <!-- <input type="hidden" name="book" value="62"> -->
    <input type="hidden" name="quickpay-form" value="shop">
    <input type="hidden" name="targets" value="тестовый перевод">
    <input type="hidden" name="sum" value="1" data-type="number">
    <input type="hidden" name="successURL " value="http://books.livefreely.ru/page.php">
    <!-- <input type="hidden" name="need-phone" value="false">
    <input type="hidden" name="need-address" value="false"> -->
    <label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>
    <label><input type="radio" name="paymentType" value="AC">Банковской картой</label>
    <input type="submit" value="Перевести">
</form>
