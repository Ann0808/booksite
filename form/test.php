<?
header("Content-Type: text/html; charset=utf-8");

/* отредактируйте настройки : */
$fk_merchant_id = '47718'; //merchant_id ID мазагина в free-kassa.ru http://free-kassa.ru/merchant/cabinet/help/
$fk_merchant_key = 'nsvo5thf'; //Секретное слово http://free-kassa.ru/merchant/cabinet/profile/tech.php
$current_url = 'http://books.livefreely.ru/form/test.php'; //полный урл до этого скрипта
$success_url = 'http://books.livefreely.ru/form/success.php'; //success урл, для некоторых типов платежей, нужно задать вручную

/* ниже не нужно ничего изменять! */

$api_url = 'http://www.free-kassa.ru/one_click_api.php';
$key = md5($fk_merchant_id.$fk_merchant_key);

if (isset($_GET['complete']) && $_GET['complete'] == 1) {
    echo 'Платеж завершен успешно';
    die();
}

if (isset($_GET['check']) && $_GET['check'] == 1) {

    if (isset($_GET['open']) && $_GET['open'] == 45) $check_payment = file_get_contents ("http://www.free-kassa.ru/ya_status.php?order=".intval($_GET['order_id']));
    if (isset($_GET['open']) && $_GET['open'] == 63) $check_payment = file_get_contents ("http://www.free-kassa.ru/ya_status.php?order=".intval($_GET['order_id']));
    $id = intval($_GET['order_id']);
    $order_status = knock_knock($api_url, 'post', 'api_action=check_order_merchant&store_id='.$fk_merchant_id.'&key='.$key.'&from=merchant&id='.$id);

    if ($order_status == '1') echo "Подождите, идет проверка оплаты...";
    if ($order_status == '0') echo "1";
    die();
}

$curs = knock_knock($api_url, 'post', 'api_action=get_curs&store_id='.$fk_merchant_id.'&key='.$key.'&from=merchant');
if ($curs->error != 0) {
    echo $curs->desc;
    die();
}
$tmp_curs = (string)$curs->answer;

$rows = explode(';', $tmp_curs);
$curs = array();
foreach ($rows as $item) {
    $cols = explode('_', $item);
    if ($cols[0]) $curs[] = array('id'=>$cols[0], 'name'=>$cols[1]);
}


if (isset($_GET['prepare_once'])) {
    $hash = md5($fk_merchant_id.":".$_GET['oa'].":".$fk_merchant_key.":".$_GET['l']);
    echo '<hash>'.$hash.'</hash>';
    exit;
}
?>

<script src="http://yandex.st/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript">
    var min = 1;
    var hash = '';
    var url = window.location.href;
    function calculate() {
        var re = /[^0-9\.]/gi;

        var desc = $('#desc').val();
        var sum = $('#sum').val();

        if (re.test(sum)) {
            sum = sum.replace(re, '');
            $('#oa').val(sum);
        }
        if (sum < min) {
            $('#error').html('Сумма должна быть больше '+min);
            $('#submit').attr("disabled", "disabled");
            return false;
        } else {
            $('#error').html('');
        }
        if (desc.length < 1) {
            $('#error').html('Необходимо ввести номер заявки');
            return false;
        }
        $.get(url+'?prepare_once=1&l='+desc+'&oa='+sum, function(data) {
            re_anwer = /<hash>([0-9a-z]+)<\/hash>/gi;
            hash = re_anwer.exec(data)[1];
            $('#s').val(hash);
            $('#submit').removeAttr("disabled");

        });
    }

    function fetch_form() {
        var senddata = "&api_action=gen_form&store_id=<?=$fk_merchant_id?>&hash="+hash+"&cur="+$('#cur').val()+"&email="+$('#email').val()+"&amount="+$('#sum').val()+"&order_id="+$('#desc').val()+"&from=merchant&key=<?=$key?>&"+$('#from_cur_input').attr('name')+"="+$('#from_cur_input').val()+"&url=<?=base64_encode($current_url)?>";
        $.post("<?=$api_url?>",  senddata ,
            function(data) {
                data = base64_decode(data);
                $("#payment_form_sorce").html(data);
                //$("#submit").remove();
            }
        );
        return false;
    }

    function load_more(id) {
        if (id == 63) $('#from_cur').html('<input type="text" name="qiwi_account" id="from_cur_input"> Ваш # в QIWI (79xxx234567)<br>');
        else if (id == 63) $('#from_cur').html('<input type="text" name="cashru"  id="from_cur_input"> Номер счета cash4wm.ru (WM123456789)<br>');
        else if (id == 82 || id == 83 || id == 84) $('#from_cur').html('<input type="text" name="phone"  id="from_cur_input"> Номер телефона (9xxx234567)<br>');
        else if (id == 79 || id == 80 || id == 81) $('#from_cur').html('<input type="text" name="bank_account"  id="from_cur_input"> Счёт в банке или номер карты<br><input type="text" name="bank_user">Фамилия Имя Отчество<br>');
        else $('#from_cur').html('');
    }

    function base64_decode (data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            dec = "",
            tmp_arr = [];

        if (!data) {
            return data;
        }

        data += '';

        do { // unpack four hexets into three octets using index points in b64
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;

            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);

        dec = tmp_arr.join('');
        dec = this.utf8_decode(dec);

        return dec;
    }

    function utf8_decode (str_data) {
        var tmp_arr = [],
            i = 0,
            ac = 0,
            c1 = 0,
            c2 = 0,
            c3 = 0;

        str_data += '';

        while (i < str_data.length) {
            c1 = str_data.charCodeAt(i);
            if (c1 < 128) {
                tmp_arr[ac++] = String.fromCharCode(c1);
                i++;
            } else if (c1 > 191 && c1 < 224) {
                c2 = str_data.charCodeAt(i + 1);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = str_data.charCodeAt(i + 1);
                c3 = str_data.charCodeAt(i + 2);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return tmp_arr.join('');
    }
</script>
<h2>Оплата через <a href="http://wwww.free-kassa.ru">free-kassa.ru</a></h2>

<? if (isset($_GET['check_order']) && $_GET['check_order'] == 1) : ?>


    <script type="text/javascript">
        var ret_url = '<?=$success_url?>';
        var i=15;
        $(document).ready(function(){
            setInterval(function() {check_order()},15000);
            setInterval(function() {countdown()},1000);
        });
        function check_order() {
            $('#check_result').html('&nbsp;');
            $.get('<?=$current_url?>?check=1&order_id='+<?=$_GET['order_id']?>, function(data) {
                if (data == '1') window.location.href = ret_url;
                else $('#check_result').html(data);
            });
            i = 15;
        }

        function countdown() {
            if (i==1) i=1;
            $('#countdown').html(i-1);
            i = i-1;
        }
    </script>
    <div align="center">
        <h2 style="color: red">НЕ ЗАКРЫВАЙТЕ ЭТУ СТРАНИЦУ!</h2>
        Проверяется оплата счета #<?=$_GET['order_id']?><br>
        <img src="/images/loading.gif">
        <div id="countdown">
        </div>
        <div id="check_result">
            Подождите, идет выставление счета...
        </div>
        <br><br>

        <? if (isset($_GET['open']) && $_GET['open'] == '63') : ?>
            <h2> <a href="http://w.qiwi.ru" target="_blank">ПЕРЕЙТИ НА САЙТ "QIWI кошелек" для оплаты</a></h2>
        <? endif; ?>
        <br><br>

    </div>
<? else : ?>
    <div id="error"></div>
    <form method=GET action="http://www.free-kassa.ru/merchant/cash.php" onsubmit="fetch_form(); return false;" id="payment_form">
        <input type="hidden" name="m" value="<?=$fk_merchant_id?>">
        <input type="text" name="oa" id="sum" id="oa" onchange="calculate()" onkeyup="calculate()" onfocusout="calculate()" onactivate="calculate()" ondeactivate="calculate()"> Введите сумму для оплаты
        <input type="hidden" name="s" id="s" value="0">
        <br>
        <input type="text" name="o" id="desc" value="" onchange="calculate()" onkeyup="calculate()" onfocusout="calculate()" onactivate="calculate()" ondeactivate="calculate()"> Номер заявки*
        <br>
        <input type="text" name="email" id="email"> Email*<br>
        <select name="cur" id="cur" onchange="load_more(this.value)">
            <? foreach ($curs as $item) : ?>
                <option value="<?=$item['id']?>"><?=$item['name']?></option>
            <? endforeach; ?>
        </select> валюта платежа<br>
        <div id="from_cur">

        </div><br>

        <input type="submit" id="submit" value="Продолжить" disabled>

    </form>
<? endif; ?>
<div id="payment_form_sorce">
</div>
<?

function knock_knock($url, $method, $data) {

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_FAILONERROR, 1);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    if ($method == "post") {
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }

    $content = curl_exec($ch);

    $content = simplexml_load_string($content);

    return $content;

}

?>
