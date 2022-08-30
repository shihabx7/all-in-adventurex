const locClose=document.getElementById('locclose');
const locmenu=document.getElementById('locmenu');
const menusearch=document.getElementsByClassName('search-loc');
const sliderbookBtn =document.getElementsByClassName('card-book-btn');


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
    sliderbookBtn[j].addEventListener('click', function showLocations(e){
    
        e.preventDefault()
        localStorage.setItem("locationSelect", "ny-kr");
        let itemx=localStorage.getItem("locationSelects");
      
        console.log(itemx);
        locmenu.classList.remove('hidden');
    
    }, false);
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

window.onscroll = function() {
  var headerHeight = document.getElementById('header-container-s').offsetHeight+'px';
  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if(window.scrollY > 620){
    document.getElementById('header').style.position = "fixed"
 

    var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    
    document.getElementById('header').style.top = "0px"
  } 
  else{
    if(w<768){
      document.getElementById('header').style.top = "-"+headerHeight
    }
    
  }
 prevScrollpos = currentScrollPos;

  }
  else{
    document.getElementById('header').style.position = "unset"
  }

}