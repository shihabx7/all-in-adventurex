const locClose=document.getElementById('locclose');
const locmenu=document.getElementById('locmenu');

locClose.addEventListener('click',function(){
    console.log('click');
    locmenu.classList.add('hidden');
    alert('click');

});