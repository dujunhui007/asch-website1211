$(document).ready(function () {
 // var video= $("#aschVideo video");
 //  function FullScreen(){
 //    video.width=$(window).width();
 //    // video.height=$(window).height();
 //  }
 //  FullScreen();

  // $("#aschVideo video").click(function () {
  //   // alert("1")
  //   requestFullScreen($("#aschVideo video"));
  // });


  // document.getElementById("#aschVideo").ondblclick=function(){
  //   var elem = document.getElementById("content");
  //   requestFullScreen(elem);
  // };

  // function requestFullScreen(element) {
  //   var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
  //   if (requestMethod) {
  //     requestMethod.call(element);
  //   } else if (typeof window.ActiveXObject !== "undefined") {
  //     var wscript = new ActiveXObject("WScript.Shell");
  //     if (wscript !== null) {
  //       wscript.SendKeys("{F11}");
  //     }
  //   }
  // }



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
    }, 499);
  });
  $(".aschTwo").hide();
  setTimeout(function () {
    $(".aschOne").addClass("hideVideo");
    $(".aschTwo").show().currentTime = 0;
  }, 14500);
});