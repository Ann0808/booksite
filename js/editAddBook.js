$(document).ready(function(){
$("#formupload").submit(function(){

var type = "POST";
var url = "ajax_posts.php";
var formData = new FormData($(this)[0]);
formData.append("flag", "1");
$.ajax({
xhr: function(){
var xhr = new window.XMLHttpRequest();
xhr.upload.addEventListener("progress", function(evt){
if (evt.lengthComputable) {
var percentComplete = evt.loaded/evt.total;
//Узнаем ширину статичного блока прогресс бара
var length = parseInt($(".progress").width());
//Наращиваем ширину вложенного блока, прогресс бара
$(".progress")
.children("div")
.width(Math.round(percentComplete*length));
}
}, false);
return xhr;
},
url: url,
data: formData,
type: type,
contentType: false,
processData: false,
success: function(response){
document.getElementById("info").innerHTML = response;
},
error: function(response) {
document.getElementById("info").innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
}
});
return false;
});
});
