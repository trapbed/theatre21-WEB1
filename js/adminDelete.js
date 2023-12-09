let delet=document.getElementById('adminDelete');
let bg=document.getElementById('noneBeforeModal');
let buttonsDelete=document.getElementsByClassName('deletePerf');
let christ=document.getElementById('buttonDelete');
let cancel=document.getElementById('noDelete');
let goDelete=document.getElementById('yesDelete');
let divOut=document.getElementById('perfomancesAdmin');
let perfomance=document.getElementById('adminPerfomaceWithoutBtn');

for(let i=0;i<buttonsDelete.length;i++){
buttonsDelete[i].addEventListener('click', function(){
    bg.style.visibility="visible";
    delet.style.top="20%";
    if(cancel.addEventListener('click', function(){
        bg.style.visibility="hidden";
        delet.style.top="-70%";
    }));
    else if(christ.addEventListener('click', function(){
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