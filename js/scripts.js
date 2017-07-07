$(document).ready(function(){
  $("#main").click(function(){
    $("#quiz").fadeIn(200);
    $("#main").hide();
    $(".results").hide();
    $("#sidebar").hide();
  });



  var favoriteColor = $("#color").val();
  var userName = $("input#name").val();
  var question2 =$("input:radio[name=quest2]:checked").val();
  var question3 =$("input:radio[name=quest3]:checked").val();
  var question4 =$("input:radio[name=quest4]:checked").val();
  var question5 =$("input:radio[name=quest5]:checked").val();





  $("#quizclick").click(function(){

  if (question2 === "established") {
    if (question3 === "interesting") {
      //Java
      $("#java").delay(300).show( "slide", {direction: "right"}, 200);
    } else {
      //C#
      $("#c-sharp").delay(300).show( "slide", {direction: "right"}, 200);

    }

  } else if(question2 === "startup") {
    if (question3 === "interesting") {
      //RUBY
      $("#java").delay(300).show( "slide", {direction: "right"}, 200);
    } else{
      //PHP
      $("#php").delay(300).show( "slide", {direction: "right"}, 200);
    }
  } else {
    if (question3 === "interesting") {
      //RUBY
      $("#ruby").delay(300).show( "slide", {direction: "right"}, 200);
    } else {
      //CSS
      $("#css").delay(300).show( "slide", {direction: "right"}, 200);
    }
  }
});





  $(".username").append(userName);
   event.preventDefault();

});
