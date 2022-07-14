const locClose=document.getElementById('locclose');
const locmenu=document.getElementById('locmenu');
const menusearch=document.getElementsByClassName('search-loc');
const sliderbookBtn =document.getElementsByClassName('card-book-btn');

locClose.addEventListener('click',function(){
    console.log('click');
    locmenu.classList.add('hidden');
    //alert('click');

});



for (let i = 0; i < menusearch.length; i++) {
    menusearch[i].addEventListener('click', function showLocations(e){
    
        e.preventDefault()
        localStorage.setItem("locationSelect", "ny-123456");
        let item=localStorage.getItem("locationSelects");
      
        console.log(item);
        locmenu.classList.remove('hidden');
    
    }, false);
}
for (let j = 0; j < sliderbookBtn.length; j++) {
    sliderbookBtn[j].addEventListener('click', function showLocations(e){
    
        e.preventDefault()
        localStorage.setItem("locationSelect", "ny-kr");
        let itemx=localStorage.getItem("locationSelects");
      
        console.log(itemx);
        locmenu.classList.remove('hidden');
    
    }, false);
}



