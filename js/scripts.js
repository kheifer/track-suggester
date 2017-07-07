$(document).ready(function(){
  $("#java").hide();
  $("#c-sharp").hide();
  $("#php").hide();
  $("#ruby").hide();
  $("#css").hide();

  $("#main-butn").click(function(){
    $("#quiz").fadeIn(200);
    $("#main").hide();
    $("#sidebar").hide();


  });



  var favoriteColor = $("#color").val();
  var userName = $("input#name").val();
  var question2 =$("input:radio[name=quest2]:checked").val();
  var question3 =$("input:radio[name=quest3]:checked").val();
  var question4 =$("input:radio[name=quest4]:checked").val();
  var question5 =$("input:radio[name=quest5]:checked").val();

  $(".username").append(userName);




  $("#form").submit(function(){
    if (question2 === "established") {
      if (question3 === "interesting") {
        //Java
        $("#quiz").fadeOut(200);
        $("#java").show( "slide", {direction: "right"}, 200);
      } else {
        //C#
        $("#quiz").fadeOut(200);
        $("#c-sharp").show( "slide", {direction: "right"}, 200);

      }

    } else if(question2 === "startup") {
      if (question3 === "interesting") {
        //RUBY
        $("#quiz").fadeOut(200);
        $("#ruby").show( "slide", {direction: "right"}, 200);
      } else{
        //PHP
        $("#quiz").fadeOut(200);
        $("#php").show( "slide", {direction: "right"}, 200);
      }
    } else {
      if (question3 === "interesting") {
        //RUBY
        $("#quiz").fadeOut(200);
        $("#ruby").show( "slide", {direction: "right"}, 200);
      } else {
        //CSS
        $("#quiz").fadeOut(200);
        $("#css").show( "slide", {direction: "right"}, 200);
      }
    }
    $("#java").hide();
    $("#c-sharp").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#css").hide();

});




  $(".username").append(userName);

   event.preventDefault();

});
