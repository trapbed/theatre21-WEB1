let firstLine=document.getElementsByClassName('place1');//ряды с местами
let secondLine=document.getElementsByClassName('place2');
let thirdLine=document.getElementsByClassName('place3');
let fourthLine=document.getElementsByClassName('place4');

let line1='ряд : 1';//текст для внесения в блоки с информацией о билете
let line2='ряд : 2';
let line3='ряд : 3';
let line4='ряд : 4';

//счетчик

let block=document.getElementsByClassName('aboutTick');//блок с информацией о билете
let placeHTML=document.getElementsByClassName('placeHTML');//строка с информацией о месте
let row=document.getElementsByClassName('row');//строка с информацией о ряде
let price=document.getElementsByClassName('price');//строка с информацией о цене
let p=0;

for(let i=0;i<firstLine.length;i++){//перебор массива с объектами из первой линии
    firstLine[i].addEventListener('click', function(){//слушатель массива из объектов первой линии
        
        let count=0;
        block[count].style.visibility='visible';

        if(this.style.height=="80%"){//изменение стилей
            this.style.width="7%";
            this.style.height="100%";
            this.style.color="#6C5C59";
            this.style.boxShadow="0 0 3px 4px rgba(57, 37, 27, 0.4) inset";
            count++;
            // for(let j=0; j<block.length;j++){
            //     block[count].style.visibility='visible';
            //     //внести данные
            // }
            // let place='место : '+firstLine[i].value;
            // count+=1;

            // for(let p=count; p<placeHTML.length; p++){
            // block[p].style.visibility="visible";
            // placeHTML[p].innerHTML=place;
            // row[p].innerHTML="ряд : 1";
            // price[p].innerHTML=" руб.";
            // break;}           
        // }
        // else{
        //     for(let k=0;k<firstLine.length;k++){
        //         firstLine[i].addEventListener('click', function(){
        //             if(firstLine[k].style.height=="100%"){
        //                 this.style.height="80%";
        //                 this.style.width="6%";
        //                 // this.style.color=
        //                 // this.style.color="#6C5C59";
        //                 this.style.boxShadow="none";
        //         }
        //     })

        // }}
    }});
};

/*
let line='ряд : 1';
        let place='место : '+firstLine[i].value;
        alert(place);



*/