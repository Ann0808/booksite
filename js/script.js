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

    // const scrollHeight = window.scrollY,
    //   scrollStep = Math.PI / (1000 / 15),
    //   cosParameter = scrollHeight / 2;
    // var scrollCount = 0,
    //   scrollMargin,
    //   scrollInterval = setInterval(function() {
    //     if (window.scrollY != 0) {
    //       scrollCount = scrollCount + 1;
    //       scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
    //       window.scrollTo(0, (scrollHeight - scrollMargin));
    //     } else clearInterval(scrollInterval);
    //   }, 15);
     $(window).scrollTop(0);
  });
});



function carousel(id) {
  var items = document.querySelectorAll(id+' .carousel__item');      // массив перелистывающихся элементов
  var len = items.length;                                       // количество элементов
  var Next = document.querySelector(id+' .next');                   // кнопка вперед
  var Prev = document.querySelector(id+' .prev');                   // кнопка назад
  var i = 0;                                                    // 0 соответсвует первому элементу, при перелистывании меняется
  var el = 0;                                                   // количество отображающихся элементов, будет переопределена ниже
  var new_el = 2;                                               // для отслеживания изменений ширины вьюпорта
  var click = 0;                                                // для обработки кликов
  var j = 0;                                                    // для замыкания круга

  function get_vision_element(arg) {                            // делает карусель круговой (принимает кол-во дополнительных элементов)
      for(var k = 0; k<len; k++) {                              // пробегаемся по всем элементам
          if (k+i>=len) {
              j=k+i-len;                                        // замыкаем круг (не даем вызваться элементам, превышающим размер массива)
          } else {
              j=k+i;
          }
          if (k<el+arg) {                                       // выводим необходимые элементы и прописываем им свойство order (порядок отображения)
              get_item(j).style.order = k;
              get_item(j).style.display = "block";
          } else {                                              // скрываем ненужные элементы и сбрасываем их order
              get_item(j).style.order = "0";
              get_item(j).style.display = "none";
          }
      }
  }

  function get_item(m) {                                        // возвращает элемент массива
      switch(m) {
          case -1: return items[len-1];                         // если нужен элемент на 1 меньше первого, то возвращаем последний
              break;
          default: return items[m];
              break;
      }
  }

  var timerId = setInterval(function() {                                              // здесь будем переопределять el
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // узнали ширину вьюпорта
      switch(true) {                                                                  // в завимости от ширины определяем new_el
        case w<=768:  new_el = 2;
                      break;
        case w<=1200: new_el = 3;
                      break;
        case w>1200: new_el = 4;
                      break;
      }
      if(el!=new_el) {                                            // если вьюпорт изменился или перезагрузка страницы
          el = new_el;
           get_vision_element(0);
      }
  }, 10);                                                         // интервал проверки ширины вьюпорта

  Next.addEventListener('click', function(event) {                // обрабатываем клик вперед
      event.preventDefault();
      if(len > el){                                               // если массив больше кол-ва отображаемых элементов
          if (click == 0) {
              click = 1;                                          // убираем возможность кликнуть повторно
              get_vision_element(1);                              //отображаем на 1 аргумент справа больше (а уже потом повышаем значение i)
              get_item(i).classList.add("carousel--move-left");    // крутим карусель влево
              i = i + 1;                                          // изменяем значение i
              if (i==len) {                                       // если привысили размер массива, возвращаемся к первому элементу
                  i=0;
              }
              setTimeout(function() {                               // выполнится через 300 миллисекунд (равно времени анимации)
                  get_vision_element(0);
                  for(var k = 0; k<len; k++) {                       // удаляем анимации у всех (на всякий)
                      get_item(k-1).classList.remove("carousel--move-left");
                      get_item(k-1).classList.remove("carousel--move-right");
                  }
              }, 300);
          }
      }
      setTimeout(function() {                                     // чтобы повторный клик не произошел слишком рано
          click=0;
      },500);
  });
  Prev.addEventListener('click', function(event) {                     // обрабатываем клик назад
      event.preventDefault();
      if(len > el) {                                                   // если массив больше кол-ва отображаемых элементов
          if(click==0) {
              click = 1;                                               // убираем возможность кликнуть повторно
              i = i - 1;                                               // изменяем значение i
              if (i == -1) {                                           // если ушли в минус, то возвращаемся к последнему элементу
                  i = len - 1;
              }
              get_vision_element(1);                                   // покажем на 1 аргумент справа больше (но сначала понизили значение i)
              get_item(i).classList.add("carousel--move-right");        // крутим карусель вправо
              setTimeout(function() {                                  // выполнится через 300 миллисекунд (равно времени анимации)
                  get_vision_element(0);
                  for(var k = 0; k<len; k++) {                         // удаляем анимацию у всех (на всякий)
                      get_item(k).classList.remove("carousel--move-left");
                      get_item(k).classList.remove("carousel--move-right");
                  }
              }, 300);
          }
      }
      setTimeout(function() {                                          // чтобы повторный клик не произошел слишком рано
          click=0;
      },500);
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
