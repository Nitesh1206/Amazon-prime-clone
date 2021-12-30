var email = document.forms['amazon-form']['email-id'];
var password = document.forms['amazon-form']['pass'];

var email_error = document.getElementById('email-error');
var pass_error = document.getElementById('pass-error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', pass_verify);

function validation(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if(password.value.length < 8){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_verify(){
    if(email.value.length >= 9){
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
    }
}
function pass_verify(){
    if(password.value.length >= 8){
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
    }
}