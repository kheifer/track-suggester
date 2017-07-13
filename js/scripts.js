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
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        alert("Why isn't this working?");
        $("#java").show("slide", {
          direction: "right"
        }, 200);
      } else {
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        $("#c-sharp").show("slide", {
          direction: "right"
        }, 200);
      }
    } else if (question2 === "startup") {
      if (question3 === "interesting") {
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        $("#ruby").show("slide", {
          direction: "right"
        }, 200);
        alert("Why isn't this working?");
      } else {
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        $("#php").show("slide", {
          direction: "right"
        }, 200);
      }
    } else {
      if (question3 === "interesting") {
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        $("#ruby").show("slide", {
          direction: "right"
        }, 200);
      } else {
        $("#quiz").fadeOut(200);
        $("#main").hide();
        $("#sidebar").hide();
        $("#css").show("slide", {
          direction: "right"
        }, 200);
      }
    }
  });
  $("#main-butn").click(function() {
    $("#quiz").fadeIn(200);
    $("#main").hide();
    $("#sidebar").hide();
  });



});
