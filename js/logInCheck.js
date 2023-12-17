let form=document.getElementById('logInModal');
let email=document.getElementById('email');
let password=document.getElementById('password');//создание переменных

form.addEventListener('submit', function(){//слушатель событий
    if (email.value=='admin@mail.com' && password.value=='admin'){//проверка значений input
        window.open("adminPannel.html");
    }
    else{
        window.open("account.html");
    };
});