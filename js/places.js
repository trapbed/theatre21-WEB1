let firstLine=document.getElementsByClassName('place1');
let line1='ряд : 1';
let count=0;
let block=document.getElementsByClassName('aboutTick');
let placeHTML=document.getElementsByClassName('placeHTML');
let row=document.getElementsByClassName('row');
let price=document.getElementsByClassName('price');
let p=0;

for(let i=0;i<firstLine.length;i++){
    firstLine[i].addEventListener('click', function(){
        if(this.style.height=="80%"){
            this.style.width="7%";
            this.style.height="100%";
            this.style.color="#6C5C59";
            this.style.boxShadow="0 0 3px 4px rgba(57, 37, 27, 0.4) inset";
            let place='место : '+firstLine[i].value;
            count+=1;

            for(let p=count; p<placeHTML.length; p){
            block[p].style.visibility="visible";
            placeHTML[p].innerHTML=place;
            row[p].innerHTML="ряд : 1";
            price[p].innerHTML=" руб.";
            break;}

            
            
        }
        else{
            this.style.width="6%";
            this.style.height="80%";
            this.style.color="#39251B";
            this.style.boxShadow="none";
            if(count==1){
            block[p].style.visibility="hidden";}
            count-=1;
        }
    });
};

/*
let line='ряд : 1';
        let place='место : '+firstLine[i].value;
        alert(place);



*/