let form=document.getElementById('logInModal');
let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('logInNav');//создание переменных

form.addEventListener('submit', function(){//слушатель событий
    if (email.value=="admin@mail.com" && password.value=="admin"){//проверка значений input
        window.location.href="adminPannel.html";
    }
    else if (email.value=="user@mail.com"){
        window.location.href="account.html";
    };
});