function visible(e) {

    $(e).siblings().toggleClass("visible");
    
    //var s = document.getElementById("hiddentext").value;
    //newTextArea.document.writeln(s);
    // var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
    // var iframe = (isGecko) ? document.getElementById("newTextArea") : frames["newTextArea"];
    //  iWin = (isGecko) ? iframe.contentWindow : iframe.window;
    //  iDoc = (isGecko) ? iframe.contentDocument : iframe.document;
    //   /* Создаём код пустой HTML-страницы */
    //   iHTML = document.getElementById("hiddentext").value;
    //   iDoc.open(); // Открываем фрейм
    //   iDoc.write(iHTML); // Добавляем написанный код в фрейм
    //   iDoc.close(); // Закрываем фрейм
    //   iDoc.designMode = "on";


}

// function setBold() {
//
// iWin.focus();
//   //iWin.document.execCommand("InsertImage", "", "");
// iWin.document.execCommand("bold", null, "");
// }
// function setImage(src) {
//
//
// iWin.document.execCommand("InsertImage", "", "");
// iWin.document.execCommand("ForeColor", null, src);
// }
// var popup = document.querySelector(".modal-content");
// function chooseImage() {
//
//            	popup.classList.toggle("modal-content--show");
// }
//
//
// function setItal() {
//      iWin.focus();
//      iWin.document.execCommand("italic", null, "");
//    }
//
// function setColor(color) {
//
//      iWin.focus();
//      iWin.document.execCommand("ForeColor", null, color);
//    }



function visibleAddChapter() {
  $(".admin_container__wrapper.hidden").toggleClass("visible");
}

function update_chapter(e) {
  var chapter_id = $(e).data("id");
   var chapter_name =$('#chp-'+chapter_id+' input').val();
   //var chapter_text =$('#chp-'+chapter_id+' textarea').val();
   // var chapter_text = iDoc.body.innerHTML;
   var chapter_text =$('#chp-'+chapter_id+' #editor p').html();

  $.ajax({
          type: "POST",
          url: "ajax_posts.php",
          data: {"chapter-name": chapter_name,
                "chapter-id": chapter_id,
                 "chapter-text": chapter_text
                },
          cache: false,
          success: function(response){
              document.getElementById("info").innerHTML = response;
         },
        error: function(response) {
          document.getElementById("info").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
        }
      });
      return false;
}

function add_chapter(e) {
  var book_id = $(e).data("id");
   var chapter_name =$('#addNewChapterWrapper input').val();
   var chapter_text =$('#addNewChapterWrapper'+ ' #editornew p').html();
  $.ajax({
          type: "POST",
          url: "ajax_posts.php",
          data: {
                 "book-id": book_id,
                 "chapter-name": chapter_name,
                 "chapter-text": chapter_text
                },
          cache: false,
          success: function(response){
              document.getElementById("info").innerHTML = response;
         },
        error: function(response) {
           document.getElementById("info").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
        }
      });
      return false;
}
