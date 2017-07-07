$(document).ready(function(){
  $("#main").click(function(){
    $("#quiz").fadeIn(200);
    $("#main").hide();
    $("#sidebar").hide();
});


  var favoriteColor = $("#color").val();
  var userName = $("input#name").val();








  $(".username").append(userName);
  $(".result").append(languageresult);

   event.preventDefault();

});
