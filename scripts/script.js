$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked doge1");
    $("#outputMsg").text("Not enough WOW, Try again.");
    $("#outputDiv").toggle().fadeIn("fast");
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge2");
    $("#outputMsg").text("In the name of the WOW, WOW, and WOW; you has so much WOW");
    $("#outputDiv").toggle().fadeIn("fast");
  });

  $("#dogeThree").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge3");
    $("#outputMsg").text("You call that WOW?? Smh.");
    $("#outputDiv").toggle().fadeIn("fast");
  });

  $("#dogeFour").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked doge4");
    $("#outputMsg").text(" Nah. But he looks cool though, right?");
    $("#outputDiv").toggle().fadeIn("fast");
  });
});
