$(document).ready(function () {
  $("#top .container .containerTitle").click(function () {
    setTimeout(function () {
      window.location.href = "aschVideo.html";
      // $(".aschOne").addClass("isFullscreenForScroll");
      // $(".aschTwo").addClass("isFullscreenForScroll");
    }, 500);
    $("#top .container hr").addClass("closeHr")
  });

});
