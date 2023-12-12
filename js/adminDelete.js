let delet=document.getElementById('adminDelete');
let bg=document.getElementById('noneBeforeModal');
let buttonsDelete=document.getElementsByClassName('deletePerf');
let christ=document.getElementById('buttonDelete');
let cancel=document.getElementById('noDelete');
let goDelete=document.getElementById('yesDelete');
let divOut=document.getElementById('perfomancesAdmin');
let perfomance=document.getElementById('adminPerfomaceWithoutBtn');//создание переменных

for(let i=0;i<buttonsDelete.length;i++){//перебор массива из кнопок
buttonsDelete[i].addEventListener('click', function(){//применен прослушиватель событий
    bg.style.visibility="visible";
    delet.style.top="20%";//изменение стилей
    if(cancel.addEventListener('click', function(){//условие на клик отмены
        bg.style.visibility="hidden";
        delet.style.top="-70%";
    }));
    else if(christ.addEventListener('click', function(){//условие на клик "креста"
        bg.style.visibility="hidden";
        delet.style.top="-70%";
    })){

    }
})
}



/*
for(let j=0;j<perfomance.length;j++){
    if(goDelete.addEventListener('click', function(){
        perfomance[j].remove();
    }));}
*/