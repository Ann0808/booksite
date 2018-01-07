function visible(e) {
    $(e).siblings().toggleClass("visible");
}

function visibleAddChapter() {
  $(".admin_container__wrapper.hidden").toggleClass("visible");
}
function visibleAddPurchase() {
  $(".admin_container__wrapper.hidden").toggleClass("visible");
}

function update_chapter(e,num) {
  var chapter_id = $(e).data("id");
   var chapter_name =$('#chp-'+chapter_id+' input').val();
   //var chapter_text =$('#chp-'+chapter_id+' textarea').val();
   // var chapter_text = iDoc.body.innerHTML;
   var chapter_text ='<div class="ql-editor">' + $('#chp-'+chapter_id+' #editor'+num+ ' .ql-editor').html() + '</div>';

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
   var chapter_text ='<div class="ql-editor">' +$('#addNewChapterWrapper'+ ' #editornew'+ ' .ql-editor').html()+ '</div>';
    //var chapter_text =$('#chp-'+chapter_id+' #editor'+num+ ' .ql-editor').html();
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
