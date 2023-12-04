const locClose = document.getElementById("locclose");
const locmenu = document.getElementById("locmenu");
const menusearch = document.getElementsByClassName("search-loc");
const sliderbookBtn = document.getElementsByClassName("card-book-btn");

/*locClose.addEventListener('click',function(){
    console.log('click');
    locmenu.classList.add('hidden');
    //alert('click');

});
*/

/*for (let i = 0; i < menusearch.length; i++) {
    menusearch[i].addEventListener('click', function showLocations(e){
    
        e.preventDefault()
        localStorage.setItem("locationSelect", "ny-123456");
        let item=localStorage.getItem("locationSelects");
      
        console.log(item);
        locmenu.classList.remove('hidden');
    
    }, false);
}*/

for (let j = 0; j < sliderbookBtn.length; j++) {
  sliderbookBtn[j].addEventListener(
    "click",
    function showLocations(e) {
      e.preventDefault();
      localStorage.setItem("locationSelect", "ny-kr");
      let itemx = localStorage.getItem("locationSelects");

      console.log(itemx);
      locmenu.classList.remove("hidden");
    },
    false
  );
}

// scroll function

// window.onload = (event) =>{

//};

/*let headerHeight=document.getElementById("header").offsetHeight;
    document.getElementById("mainContent").style.paddingTop=headerHeight+"px";
    console.log(headerHeight); */

//var divHeight = window.innerHeight;

var prevScrollpos = window.pageYOffset;
//var scrollPosition = window.scrollY;

window.onscroll = function () {
  var mainBody = document.getElementById("mainContent");
  var headerHeight =
    document.getElementById("header-container-s").offsetHeight + "px";
  var headerHeightFull = document.getElementById("header").offsetHeight + "px";
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (window.scrollY > 620) {
    if (w > 1024) {
      mainBody.style.paddingTop = headerHeight;
    }
    if (w < 1025) {
      mainBody.style.paddingTop = headerHeightFull;
    }

    document.getElementById("header").style.position = "fixed";

    var currentScrollPos = window.pageYOffset;
    //console.log("prev",prevScrollpos)
    //console.log("curr",currentScrollPos)

    if (prevScrollpos > currentScrollPos + 30) {
      document.getElementById("header").style.top = "0px";

      prevScrollpos = currentScrollPos + 30;
    } else {
      if (w < 768) {
        document.getElementById("header").style.top = "-" + headerHeight;
      }

      prevScrollpos = currentScrollPos;
    }
    // prevScrollpos = currentScrollPos
  } else {
    mainBody.style.paddingTop = "0px";
    document.getElementById("header").style.position = "unset";
  }
};
