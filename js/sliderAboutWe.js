let big=document.getElementById("bigImgWe");
let lilImg=document.getElementsByClassName("weImg");//получение переменных
for(let i=0;i<lilImg.length;i++){//перебор массива изображений
    lilImg[i].addEventListener('click', function(){//слушатель событий
        switch (i){//используем swithch case что бы перебрать и подбирать полученные значения и менять стили для элемента масссива с индексом i
            case 0:
                big.style.backgroundImage="url(../images/about1.png)";
                big.style.backgroundSize="cover";
                lilImg[i].style.height="3.5vmax";
                lilImg[i].style.alignSelf="center";
                break;
            case 1:
                big.style.backgroundImage="url(../images/aboutS2.png)";
                big.style.backgroundSize="cover";
                lilImg[i].style.height="3.5vmax";
                lilImg[i].style.alignSelf="center";
                break;
            case 2:
                big.style.backgroundImage="url(../images/aboutS3.png)";
                big.style.backgroundSize="cover";
                lilImg[i].style.height="3.5vmax";
                
                lilImg[i].style.alignSelf="center";
                break;
            case 3:
                big.style.backgroundImage="url(../images/aboutS4.png)";
                big.style.backgroundSize="cover";
                lilImg[i].style.height="3.5vmax";
                lilImg[i].style.alignSelf="center";
                break;
            case 4:
                big.style.backgroundImage="url(../images/aboutS5.png)";
                big.style.backgroundSize="cover";
                lilImg[i].style.height="3.5vmax";
                lilImg[i].style.alignSelf="center";
        }
})
}
