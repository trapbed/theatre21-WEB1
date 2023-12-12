let btn=document.getElementById("placeBtn");
let discard=document.getElementById("discardPlace");
let save=document.getElementById("savePlace");
let modal=document.getElementById("createPlace");
let bgCreatePlace=document.getElementById("noneBeforeModal");//назначение переменных

btn.addEventListener('click', function(){//слушатель событий
    modal.style.top="50%";
    bgCreatePlace.style.visibility="visible";//смена стилей по клику, ниже аналогично
});
discard.addEventListener('click', function(){
    modal.style.top="-50%";
    bgCreatePlace.style.visibility="hidden";
});
save.addEventListener('click', function(){
    alert('Данные сохранены');
})