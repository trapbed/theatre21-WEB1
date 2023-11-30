/*PERFOMANCE*/ 
    let str=document.getElementById('beforeStepSvg');
    let beforeStep=document.getElementById('beforeStep');
    beforeStep.addEventListener('mouseover', function(){
        str.style.stroke='#B68F6E';
        beforeStep.style.color='#B68F6E';
    });
    beforeStep.addEventListener('mouseout', function(){
        str.style.stroke='#39251B';
        beforeStep.style.color='#39251B';
    })
/*PLACE*/
    let strPlace=document.getElementById('beforeStepSvgPlace');
    let beforeStepPlace=document.getElementById('beforeStepPlace');
    beforeStepPlace.addEventListener('mouseover', function(){
        strPlace.style.stroke='#B68F6E';
        beforeStepPlace.style.color='#B68F6E';
    });
    beforeStepPlace.addEventListener('mouseout', function(){
        strPlace.style.stroke='#39251B';
        beforeStepPlace.style.color='#39251B';
    })

/*NAVIGATION*/
let logIn=document.getElementById('logIn');
