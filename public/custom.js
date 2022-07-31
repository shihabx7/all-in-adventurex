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


 





var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    if(screen.width<1024 && document.getElementById('hbtn')!=null){
      document.getElementById('hbtn').style.top = "74px"
    }
    if(screen.width<768 && document.getElementById('hbtn')!=null){
      document.getElementById('hbtn').style.top = "68px"
    }
    if(screen.width<380 && document.getElementById('hbtn')!=null){
      document.getElementById('hbtn').style.top = "60px"
    }
    
  } else {
    document.getElementById("header").style.top = "-84px";
    if(document.getElementById('hbtn')!=null){
      document.getElementById('hbtn').style.top = "0px"
    }
    

  }
  prevScrollpos = currentScrollPos;
}