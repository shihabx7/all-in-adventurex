const locClose=document.getElementById('locclose');
const locmenu=document.getElementById('locmenu');
const menusearch=document.getElementsByClassName('search-loc');

locClose.addEventListener('click',function(){
    console.log('click');
    locmenu.classList.add('hidden');
    //alert('click');

});

function showLocations(){
    
    localStorage.setItem("locationSelect", "ny-123456");
    let item=localStorage.getItem("locationSelects");
    console.log(item);
    locmenu.classList.remove('hidden');

}

for (var i = 0; i < menusearch.length; i++) {
    menusearch[i].addEventListener('click', showLocations, false);
}


