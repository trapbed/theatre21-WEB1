let slider=document.getElementsByClassName('sliderCircle');
let main=document.getElementById('weAreImg');
let windowTitle=window.matchMedia("(orientation:portrait)");

for(let i=0; i<slider.length;i++){
    slider[i].addEventListener('click', function(){
        if(windowTitle){
            switch (i){
                case 0:
                    main.style.backgroundImage="url(../images/title1.png)";
                    slider[i].style.width="2.5vmin";
                    slider[i].style.height="2.5vmin";
                    slider[i].style.backgroundColor="#39251B";
    
                    slider[1].style.height="2vmin";
                    slider[1].style.width="2vmin";
                    slider[1].style.backgroundColor="#D9D9D9";
    
                    slider[2].style.height="2vmin";
                    slider[2].style.width="2vmin";
                    slider[2].style.backgroundColor="#D9D9D9";
    
                    slider[3].style.height="2vmin";
                    slider[3].style.width="2vmin";
                    slider[3].style.backgroundColor="#D9D9D9";
    
                    slider[4].style.height="2vmin";
                    slider[4].style.width="2vmin";
                    slider[4].style.backgroundColor="#D9D9D9";
                    break;
                case 1:
                    main.style.backgroundImage="url(../images/title2.png)";
                    slider[i].style.width="2.5vmin";
                    slider[i].style.height="2.5vmin";
                    slider[i].style.backgroundColor="#39251B";
    
                    slider[0].style.height="2vmin";
                    slider[0].style.width="2vmin";
                    slider[0].style.backgroundColor="#D9D9D9";
    
                    slider[2].style.height="2vmin";
                    slider[2].style.width="2vmin";
                    slider[2].style.backgroundColor="#D9D9D9";
    
                    slider[3].style.height="2vmin";
                    slider[3].style.width="2vmin";
                    slider[3].style.backgroundColor="#D9D9D9";
    
                    slider[4].style.height="2vmin";
                    slider[4].style.width="2vmin";
                    slider[4].style.backgroundColor="#D9D9D9";
                    break;
                case 2:
                    main.style.backgroundImage="url(../images/title3.png)";
                    slider[i].style.width="2.5vmin";
                    slider[i].style.height="2.5vmin";
                    slider[i].style.backgroundColor="#39251B";
    
                    slider[1].style.height="2vmin";
                    slider[1].style.width="2vmin";
                    slider[1].style.backgroundColor="#D9D9D9";
    
                    slider[0].style.height="2vmin";
                    slider[0].style.width="2vmin";
                    slider[0].style.backgroundColor="#D9D9D9";
    
                    slider[3].style.height="2vmin";
                    slider[3].style.width="2vmin";
                    slider[3].style.backgroundColor="#D9D9D9";
    
                    slider[4].style.height="2vmin";
                    slider[4].style.width="2vmin";
                    slider[4].style.backgroundColor="#D9D9D9";
                    break;
                case 3:
                    main.style.backgroundImage="url(../images/title4.png)";
                    slider[i].style.width="2.5vmin";
                    slider[i].style.height="2.5vmin";
                    slider[i].style.backgroundColor="#39251B";
    
                    slider[1].style.height="2vmin";
                    slider[1].style.width="2vmin";
                    slider[1].style.backgroundColor="#D9D9D9";
    
                    slider[2].style.height="2vmin";
                    slider[2].style.width="2vmin";
                    slider[2].style.backgroundColor="#D9D9D9";
    
                    slider[0].style.height="2vmin";
                    slider[0].style.width="2vmin";
                    slider[0].style.backgroundColor="#D9D9D9";
    
                    slider[4].style.height="2vmin";
                    slider[4].style.width="2vmin";
                    slider[4].style.backgroundColor="#D9D9D9";
                    break;
                case 4:
                    main.style.backgroundImage="url(../images/title5.png)";
                    slider[i].style.width="2.5vmin";
                    slider[i].style.height="2.5vmin";
                    slider[i].style.backgroundColor="#39251B";
    
                    slider[1].style.height="2vmin";
                    slider[1].style.width="2vmin";
                    slider[1].style.backgroundColor="#D9D9D9";
    
                    slider[2].style.height="2vmin";
                    slider[2].style.width="2vmin";
                    slider[2].style.backgroundColor="#D9D9D9";
    
                    slider[3].style.height="2vmin";
                    slider[3].style.width="2vmin";
                    slider[3].style.backgroundColor="#D9D9D9";
    
                    slider[0].style.height="2vmin";
                    slider[0].style.width="2vmin";
                    slider[0].style.backgroundColor="#D9D9D9";
                    break;
                }
        }
        else{
            switch (i){
            case 0:
                main.style.backgroundImage="url(../images/title1.png)";
                slider[i].style.width="2.5vmax";
                slider[i].style.height="2.5vmax";
                slider[i].style.backgroundColor="#39251B";

                slider[1].style.height="2vmax";
                slider[1].style.width="2vmax";
                slider[1].style.backgroundColor="#D9D9D9";

                slider[2].style.height="2vmax";
                slider[2].style.width="2vmax";
                slider[2].style.backgroundColor="#D9D9D9";

                slider[3].style.height="2vmax";
                slider[3].style.width="2vmax";
                slider[3].style.backgroundColor="#D9D9D9";

                slider[4].style.height="2vmax";
                slider[4].style.width="2vmax";
                slider[4].style.backgroundColor="#D9D9D9";
                break;
            case 1:
                main.style.backgroundImage="url(../images/title2.png)";
                slider[i].style.width="2.5vmax";
                slider[i].style.height="2.5vmax";
                slider[i].style.backgroundColor="#39251B";

                slider[0].style.height="2vmax";
                slider[0].style.width="2vmax";
                slider[0].style.backgroundColor="#D9D9D9";

                slider[2].style.height="2vmax";
                slider[2].style.width="2vmax";
                slider[2].style.backgroundColor="#D9D9D9";

                slider[3].style.height="2vmax";
                slider[3].style.width="2vmax";
                slider[3].style.backgroundColor="#D9D9D9";

                slider[4].style.height="2vmax";
                slider[4].style.width="2vmax";
                slider[4].style.backgroundColor="#D9D9D9";
                break;
            case 2:
                main.style.backgroundImage="url(../images/title3.png)";
                slider[i].style.width="2.5vmax";
                slider[i].style.height="2.5vmax";
                slider[i].style.backgroundColor="#39251B";

                slider[1].style.height="2vmax";
                slider[1].style.width="2vmax";
                slider[1].style.backgroundColor="#D9D9D9";

                slider[0].style.height="2vmax";
                slider[0].style.width="2vmax";
                slider[0].style.backgroundColor="#D9D9D9";

                slider[3].style.height="2vmax";
                slider[3].style.width="2vmax";
                slider[3].style.backgroundColor="#D9D9D9";

                slider[4].style.height="2vmax";
                slider[4].style.width="2vmax";
                slider[4].style.backgroundColor="#D9D9D9";
                break;
            case 3:
                main.style.backgroundImage="url(../images/title4.png)";
                slider[i].style.width="2.5vmax";
                slider[i].style.height="2.5vmax";
                slider[i].style.backgroundColor="#39251B";

                slider[1].style.height="2vmax";
                slider[1].style.width="2vmax";
                slider[1].style.backgroundColor="#D9D9D9";

                slider[2].style.height="2vmax";
                slider[2].style.width="2vmax";
                slider[2].style.backgroundColor="#D9D9D9";

                slider[0].style.height="2vmax";
                slider[0].style.width="2vmax";
                slider[0].style.backgroundColor="#D9D9D9";

                slider[4].style.height="2vmax";
                slider[4].style.width="2vmax";
                slider[4].style.backgroundColor="#D9D9D9";
                break;
            case 4:
                main.style.backgroundImage="url(../images/title5.png)";
                slider[i].style.width="2.5vmax";
                slider[i].style.height="2.5vmax";
                slider[i].style.backgroundColor="#39251B";

                slider[1].style.height="2vmax";
                slider[1].style.width="2vmax";
                slider[1].style.backgroundColor="#D9D9D9";

                slider[2].style.height="2vmax";
                slider[2].style.width="2vmax";
                slider[2].style.backgroundColor="#D9D9D9";

                slider[3].style.height="2vmax";
                slider[3].style.width="2vmax";
                slider[3].style.backgroundColor="#D9D9D9";

                slider[0].style.height="2vmax";
                slider[0].style.width="2vmax";
                slider[0].style.backgroundColor="#D9D9D9";
                break;
            }
        }
    })
}