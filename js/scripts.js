$(document).ready(function() {
  var favoriteColor = $("#color").val();
  var userName = $("input#name").val();
  var question2 = $("input:radio[name=quest2]:checked").val();
  var question3 = $("input:radio[name=quest3]:checked").val();
  var question4 = $("input:radio[name=quest4]:checked").val();
  var question5 = $("input:radio[name=quest5]:checked").val();
  $("#track-sug").submit(function(event) {
    event.preventDefault();
    $(".username").text(userName);
    if (question2 === "established") {
      if (question3 === "interesting") {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        alert("Why isn't this working?");
        $("#java").show();
      } else {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        $("#c-sharp").show();
      }
    } else if (question2 === "startup") {
      if (question3 === "interesting") {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        $("#ruby").show();
        alert("Why isn't this working?");
      } else {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        $("#php").show();
      }
    } else {
      if (question3 === "interesting") {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        $("#ruby").show();
      } else {
        $("#quiz").fadeOut();
        $("#main").hide();
        $("#sidebar").hide();
        $("#css").show();
      }
    }
  });
  $("#main-butn").click(function() {
    $("#quiz").fadeIn();
    $("#main").hide();
    $("#sidebar").hide();
  });



});
