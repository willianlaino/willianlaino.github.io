window.addEventListener("scroll", myFunction);
var elmTop = document.getElementById("container-chamada").offsetTop;
var scrollY = 0;
var preeffect = 90;

function myFunction() {

    scrollY = window.pageYOffset;

    if (scrollY >= elmTop-preeffect){

      document.getElementById("container-chamada").style.top = scrollY+preeffect+"px";

    }else{

      document.getElementById("container-chamada").style.top = elmTop+"px";

    }

}
