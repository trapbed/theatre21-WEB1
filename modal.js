
let NavLogIn=document.getElementById('logInNav');
let signUp=document.getElementById('signUpForm');
let christ=document.getElementsByClassName('christ');
let logIn=document.getElementById('logInModal');
let bg=document.getElementById('noneBeforeModal');
let logInLeft=document.getElementById('buttonLeftLogIn');
let signUpLeft=document.getElementById('buttonLeftSignIn');

/*LOG IN VISIBLE*/
NavLogIn.addEventListener('click', function(){
    logIn.style.top="50%";
    bg.style.visibility="visible";

});
/*SIGN UP FORM VISIBLE*/
logInLeft.addEventListener('click', function(){
    logIn.style.top="-50%";
    signUp.style.top="50%";
});
/*LOGIN BEFORE SIGN IN*/
signUpLeft.addEventListener('click', function(){
    signUp.style.top="-50%";
    logIn.style.top="50%"
});

/*CLOSE*/
for(let i=0;i<christ.length;i++){
christ[i].addEventListener('click', function(){
    signUp.style.top="-50%";
    logIn.style.top="-50%";
    bg.style.visibility="hidden";
    
})};