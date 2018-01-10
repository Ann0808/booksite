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
  <iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=<?echo $price;?>&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2F<?echo $host?>%2Fpage.php%3Fchapter%3D0%26book%3D<?echo $id_link?>&quickpay=small&account=<?echo $adminYandex?>&label=<?echo $label?>" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
