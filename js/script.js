/*PERFOMANCE*/ 
    let str=document.getElementById('beforeStepSvg');
    let beforeStep=document.getElementById('beforeStep');//получение переменных
    beforeStep.addEventListener('mouseover', function(){//слушатель событий
        str.style.stroke='#B68F6E';//смена стилей
        beforeStep.style.color='#B68F6E';
    });
    beforeStep.addEventListener('mouseout', function(){//слушатель событий
        str.style.stroke='#39251B';//смена стилей
        beforeStep.style.color='#39251B';
    })
/*PLACE*/
    let strPlace=document.getElementById('beforeStepSvgPlace');
    let beforeStepPlace=document.getElementById('beforeStepPlace');//получение пременных
    beforeStepPlace.addEventListener('mouseover', function(){//слушатели события наведения мыши
        strPlace.style.stroke='#B68F6E';
        beforeStepPlace.style.color='#B68F6E';
    });
    beforeStepPlace.addEventListener('mouseout', function(){
        strPlace.style.stroke='#39251B';
        beforeStepPlace.style.color='#39251B';
    })