$(document).ready(function () {
  var isFullscreenForScroll;

  function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  GetRequest();
  isFullscreenForScroll = GetRequest().type;
  if (isFullscreenForScroll == undefined) {
    isFullscreenForScroll = "false"
  }

  $("#top .container hr").addClass("aschBoundary");

  function switchFullScreen() {
    $(window).keydown(function (event) {
      if (event.keyCode == 122) {
        if (isFullscreenForScroll = "true") {
          alert(isFullscreenForScroll + "切换全屏1");
          isFullscreenForScroll = "false";
        } else {
          isFullscreenForScroll = "true";
          alert(isFullscreenForScroll + "切换非全屏2");
        }


        // isFullscreenForScroll = "true";
        // if (isFullscreenForScroll = "true") {
        //   alert(isFullscreenForScroll+"切换全屏1");
        //   // isFullscreenForScroll = "false";
        //   // if(event.keyCode == 122){
        //   //   alert(isFullscreenForScroll+"切换非全屏1");
        //   //   isFullscreenForScroll = "true";
        //   // }
        //   // switchFullScreen();
        // } else {
        //   alert("切换非全屏2");
        //   isFullscreenForScroll = "true";
        //   if(event.keyCode == 122){
        //     alert("切换全屏2");
        //     isFullscreenForScroll = "false";
        //   }
        // switchFullScreen();
        // }
        // isFullscreenForScroll="true";
        // alert(isFullscreenForScroll)
      }
    });
  }

  switchFullScreen();


  $("#top .container .containerTitle").click(function () {

    setTimeout(function () {
      window.location.href = "aschVideo.html?" + "type=" + isFullscreenForScroll;
      // $(".aschOne").addClass("isFullscreenForScroll");
      // $(".aschTwo").addClass("isFullscreenForScroll");
    }, 500);
    $("#top .container hr").addClass("closeHr")
  });

});
