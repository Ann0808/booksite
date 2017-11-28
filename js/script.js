$(document).ready(function() {
carousel("#carouselPurchased");
carousel("#carouselRecommended");
carousel("#carouselInteresting");
  // $('#carouselPurchased').on('slide.bs.carousel', function(e) {
  //   var id = '#carouselPurchased';
  //   // multipleCarousel(e, id);
  // });
  //
  // $('#carouselRecommended').on('slide.bs.carousel', function(e) {
  //   var id = '#carouselRecommended';
  //   multipleCarousel(e, id);
  // }).carousel({
  //   interval: false
  // });
  //
  // $('#carouselInteresting').on('slide.bs.carousel', function(e) {
  //   var id = '#carouselInteresting';
  //   multipleCarousel(e, id);
  // }).carousel({
  //   interval: false
  // });


});


/*scrolling buton function*/

$(window).scroll(function() {
  if ($(this).scrollTop() != 0) {
    $('.button-to-top').fadeIn();
  } else {
    $('.button-to-top').fadeOut();
  }
  $('.button-to-top').click(function() {

    const scrollHeight = window.scrollY,
      scrollStep = Math.PI / (1000 / 15),
      cosParameter = scrollHeight / 2;
    var scrollCount = 0,
      scrollMargin,
      scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
          scrollCount = scrollCount + 1;
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
          window.scrollTo(0, (scrollHeight - scrollMargin));
        } else clearInterval(scrollInterval);
      }, 15);
  });
});



function carousel(id) {

  var items = document.querySelectorAll(id+' .carousel__item'); // массив перелистывающихся элементов
  var len = items.length; // количество элементов
  var parent = document.querySelector(id+'.carousel'); // родитель карусели
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
          get_item(i).classList.add("carousel--move-left");    //добавляем анимацию
          i = i + 1;                                          // изменяем значение i
          if (i==len) {
              i=0;
          }
          setTimeout(function() {                             // выполнится через 300 миллисекунд (равно времени анимации)
              get_item(i-1).style.order = "auto";             // скрываем элемент слева и сбрасываем его order
              get_item(i-1).style.display = "none";
              for(var k = 0; k<len; k++) {
                  get_item(k).classList.remove("carousel--move-left"); // удаляем анимацию у всех (на всякий)
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
          get_item(i-1).classList.add("carousel--move-right");       // добавляем анимацию
          get_item(i+el-1).classList.add("carousel--opacity");      // добавляем анимацию
          i = i - 1;            // изменяем значение i
          if (i == -1) {
              i = len - 1;
          }
          setTimeout(function() {                                  // выполнится через 300 миллисекунд (равно времени анимации)
              get_item(i+el).style.order = "auto";                // скрываем элемент справа и сбрасываем его order
              get_item(i+el).style.display = "none";
              for(var k = 0; k<len; k++) {
                  get_item(k).classList.remove("carousel--opacity");    // удаляем анимацию у всех (на всякий)
                  get_item(k).classList.remove("carousel--move-right");
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
}

// function multipleCarousel(e, id) {
//   var $e = $(e.relatedTarget);
//   var idx = $e.index();
//   var viewport = $(window).width();
//   var itemsPerSlide=4;
//   // switch (true) {
//   //   case (viewport<768): itemsPerSlide=2;
//   //     break;
//   //     case ((viewport>=768)&&(viewport < 992)):
//   //     itemsPerSlide=2;
//   //       break;
//   //   default: itemsPerSlide=2;
//   //
//   // }
//   // var itemsPerSlide = (viewport >= 992) ? 4 : 3;
//   var totalItems = $(id + ' .carousel-item').length;
//   if (idx >= totalItems - (itemsPerSlide - 1)) {
//     var it = itemsPerSlide - (totalItems - idx);
//     for (var i = 0; i < it; i++) {
//       // append slides to end
//       if (e.direction == "left") {
//         $(id + ' .carousel-item').eq(i).appendTo(id + ' .carousel-inner');
//       } else {
//         $(id + ' .carousel-item').eq(0).appendTo(id + ' .carousel-inner');
//       }
//     }
//   }
// }
