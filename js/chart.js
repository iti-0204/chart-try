$(function () {
  $(".start-button").on("click", function () {
    $(".topicon").fadeOut(1000);

    console.log("aiueo");
    $(".question-background").fadeIn(4000).css("display", "flex");
  });
});
