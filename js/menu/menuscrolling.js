window.addEventListener("scroll", menuScrolling);

var elmTop = document.getElementById("container-chamada").offsetTop;
var scrollY = 0;
var pre = 150;

function menuScrolling() {

    scrollY = window.pageYOffset;

      if (scrollY >= elmTop+pre){

        if(click < 1){

          document.getElementById("menu").style.background = "#381D83";
          document.getElementById("menu").style.height = "65px";
          document.getElementById("listmenu").style.top = "16px";
          document.getElementById("logo").style.top = "14px";
          document.getElementById("menu").style.boxShadow = "0px 0px 6px #232428";
          document.getElementById("buttonmenu").style.top = "23px";

        }

      }else{

        if(click < 1){

          document.getElementById("menu").style.background = "none";
          document.getElementById("menu").style.height = "80px";
          document.getElementById("listmenu").style.top = "30px";
          document.getElementById("logo").style.top = "28px";
          document.getElementById("menu").style.boxShadow = "none";
          document.getElementById("buttonmenu").style.top = "37px";

        }

      }

}
