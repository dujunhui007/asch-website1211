$(document).ready(function () {

  $("#top .container hr").addClass("aschBoundary");

  $("#top .container .containerTitle").click(function () {
    setTimeout(function () {
      window.location.href = "aschVideo.html";
      // $(".aschOne").addClass("isFullscreenForScroll");
      // $(".aschTwo").addClass("isFullscreenForScroll");
    }, 490);
    $("#top .container hr").addClass("closeHr")
  });

});
