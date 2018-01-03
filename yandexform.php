<!-- <?php //require( "config.php" );
 //$adminYandex  = ADMIN_YANDEX; ?>
<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
    <input type="hidden" name="receiver" value="<?//echo $adminYandex;?>">
    <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
    <input type="hidden" name="short-dest" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
    <input type="hidden" name="label" value="$order_id">
    <input type="hidden" name="quickpay-form" value="donate">
    <input type="hidden" name="targets" value="транзакция {order_id}">
    <input type="hidden" name="sum" value="1" data-type="number">
    <input type="hidden" name="successURL " value="/success.php">
    <input type="text" name="comment" >
    <input type="hidden" name="need-fio" value="true">
    <input type="email" name="need-email" >
    <!-- <input type="hidden" name="need-phone" value="false">
    <input type="hidden" name="need-address" value="false"> -->
    <!-- <label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>
    <label><input type="radio" name="paymentType" value="AC">Банковской картой</label>
    <input type="submit" value="Перевести">
</form> --> -->

<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=2&button-text=11&yamoney-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2Fbooks.livefreely.ru%2Fsuccess.php&quickpay=small&account=410014992861718&" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=2&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2Fbooks.livefreely.ru%2Fsuccess.php&quickpay=small&account=410014992861718&" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>

<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0&default-sum=2&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=http%3A%2F%2Fbooks.livefreely.ru%2Fyandexform.php&quickpay=small&account=410014992861718&label=8" width="184" height="36" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
