let form=document.getElementById('logInModal');
let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('logInNav');

form.addEventListener('submit', function(){
    if (email.value=="admin@mail.com" && password.value=="admin"){
        window.location.href="adminPannel.html";
    }
    else{
        /*ИЗМЕНЕНИЕ НАЗВАНИЯ КНОПКИ ВОЙТИ*/
    }
});