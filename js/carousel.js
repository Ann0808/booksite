
var items = document.querySelectorAll("#carouselPurchased"+' .carusel__item'); // массив перелистывающихся элементов
var len = items.length; // количество элементов
var parent = document.querySelector("#carouselPurchased"+'.carusel'); // родитель карусели
var Next = parent.querySelector('.next'); // кнопка вперед
var Prev = parent.querySelector('.prev'); // кнопка назад
var i = 0; // 0 соответсвует первому элементу, при перелистывании меняется
var el = 0; // количество отображающихся элементов, будет переопределена ниже в интервальной функции
var new_el = 2;
var click = 0; // переменная для обработки кликов

var timerId = setInterval(function() { // здесь будем переопределять el
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // узнали ширину вьюпорта
    switch(true) { // в завимости от ширины определяем el
      case w<=768:  new_el = 2;
                    break;  
      case w<=1200: new_el = 3;
                    break; 
      case w>1200: new_el = 4;
                    break;
    }
    if(el!=new_el) {
        el = new_el;
         for(var k = 0; k < len; k++) {                  // пробегаем по всем элементам
            if(k<el) {                                  // присваеваем элементам нужный порядок и отображаем их
                get_item(k+i).style.order = k;
                get_item(k+i).style.display = "block";
            } else {                                    // остальные элементы стираем и сбрасываем order
                get_item(k+i).style.order = "auto";
                get_item(k+i).style.display = "none";
            }
        }
    }     
}, 10); // интервал проверки

function get_item(m) { // возвращает элемент массива, отвечает за прокрутку при выходе из массива
    switch(m) {
        case -1: return items[len-1]; // если нужен элемент на 1 меньше первого, то возвращаем последний
            break;
        case -2: return items[len-2];
            break;
        case -3: return items[len-3];
            break;
        case -4: return items[len-4];
            break;
        case len: return items[0];  // если нужен элемент на 1 больше последнего, то возвращаем первый
            break;
        case len+1: return items[1];
            break;
        case len+2: return items[2];
            break;
        case len+3: return items[3];
            break;
        default: return items[m];
            break;
    }
}

Next.addEventListener('click', function(event) {            // обрабатываем клик вправо
    event.preventDefault();
    if (click == 0) {
        click = 1;                                          // сразу убираем возможность кликнуть повторно и все сломать
        for(var k = 0; k < el+1; k++) {                     // добавляем элемент справа и прописываем всем новые order
            get_item(k+i).style.order = k;
            get_item(k+i).style.display = "block";
        }
        get_item(i).classList.add("carusel--move-left");    //добавляем анимацию
        i = i + 1;                                          // изменяем значение i
        if (i==len) {
            i=0; 
        }  
        setTimeout(function() {                             // выполнится через 300 миллисекунд (равно времени анимации)
            get_item(i-1).style.order = "auto";             // скрываем элемент слева и сбрасываем его order
            get_item(i-1).style.display = "none";
            for(var k = 0; k<len; k++) {
                get_item(k).classList.remove("carusel--move-left"); // удаляем анимацию у всех (на всякий)
            }
        }, 300);
    }
    setTimeout(function() {                                      // чтобы повторный клик не произошел слишком рано
        click=0;
    },1000);
});


Prev.addEventListener('click', function(event) {                   // обрабатываем клик влево
    event.preventDefault();
    if(click==0) {
        click = 1;                                               // сразу убираем возможность кликнуть повторно и все сломать
        for(var k = 0; k < el+1; k++) {                          // добавляем элемент слева и прописываем всем новые order
            get_item(k+i-1).style.order = k;
            get_item(k+i-1).style.display = "block";
        }
        get_item(i-1).classList.add("carusel--move-right");       // добавляем анимацию
        get_item(i+el-1).classList.add("carusel--opacity");      // добавляем анимацию
        i = i - 1;            // изменяем значение i
        if (i == -1) {
            i = len - 1;
        }
        setTimeout(function() {                                  // выполнится через 300 миллисекунд (равно времени анимации)
            get_item(i+el).style.order = "auto";                // скрываем элемент справа и сбрасываем его order
            get_item(i+el).style.display = "none";
            for(var k = 0; k<len; k++) {
                get_item(k).classList.remove("carusel--opacity");    // удаляем анимацию у всех (на всякий)
                get_item(k).classList.remove("carusel--move-right");
            }
        }, 300);  
    }
    setTimeout(function() {                                           // чтобы повторный клик не произошел слишком рано
        click=0;
    },1000);
});

Next.addEventListener('dblclick', function(event) {            // двойной клик ничего не делает и блокирует клики еще на секунду
    event.preventDefault();
    click = 1;   
    setTimeout(function() {
        click=0;
    },1000);
});

Prev.addEventListener('dblclick', function(event) {            // двойной клик ничего не делает и блокирует клики еще на секунду
    event.preventDefault();
    click = 1;   
    setTimeout(function() {
        click=0;
    },1000);
});