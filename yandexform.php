<?php require( "config.php" );
 $adminYandex  = ADMIN_YANDEX; ?>
<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
    <input type="hidden" name="receiver" value="<?echo $adminYandex;?>">
    <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
    <input type="hidden" name="short-dest" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
    <input type="hidden" name="label" value="$order_id">
    <input type="hidden" name="quickpay-form" value="donate">
    <input type="hidden" name="targets" value="транзакция {order_id}">
    <input type="hidden" name="sum" value="1" data-type="number">
    <input type="hidden" name="successURL " value="/page.php">
    <input type="text" name="comment" >
    <input type="hidden" name="need-fio" value="true">
    <input type="email" name="need-email" >
    <!-- <input type="hidden" name="need-phone" value="false">
    <input type="hidden" name="need-address" value="false"> -->
    <label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>
    <label><input type="radio" name="paymentType" value="AC">Банковской картой</label>
    <input type="submit" value="Перевести">
</form>
