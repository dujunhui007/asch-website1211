$(document).ready(function () {
  $(".aschTwo").hide();
  $("#aschVideo").click(function () {
    setTimeout(function () {
      $(".closeLeft").addClass("closeLeftAnimation");
      $(".closeRight").addClass("closeRightAnimation");
    }, 0);
    setTimeout(function () {
      $("#aschVideo").remove(".closeLeft").remove(".closeRight");
    }, 500);
    setTimeout(function () {
      window.location.href = "index.html";
    }, 500);
  });
  setTimeout(function () {
    $(".aschOne").hide();
    // $(".aschOne").addClass("hideVideo");
    $(".aschTwo").show().currentTime = 0;
  }, 19000);
});