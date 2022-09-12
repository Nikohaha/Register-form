
var form = document.querySelector('#form');
var email = document.querySelector('#email');
var username = document.querySelector('#username');
var password1 = document.querySelector('#password1');
var password2 = document.querySelector('#password2');
var newsletter = document.querySelector('#newsletter');
var terms = document.querySelector('#terms');

var emailError = document.querySelector('#emailError');
var usernameError = document.querySelector('#usernameError');
var password1Error = document.querySelector('#password1Error');
var password2Error = document.querySelector('#password2Error');
var termsError = document.querySelector('#termsError');

var reset = document.querySelector('#reset');


//reset button function
reset.addEventListener('click', function () {
    emailError.textContent = '';
    usernameError.textContent = '';
    password1Error.textContent = '';
    password2Error.textContent = '';
    termsError.textContent = '';
    email.style.border = 'solid black 2px';
    username.style.border = 'solid black 2px';
    password1.style.border = 'solid black 2px';
    password2.style.border = 'solid black 2px';
});



// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validate();
// });

// alert newsletter checked
newsletter.addEventListener('click', function(){
    if(newsletter.checked){
        alert('If you select to receive a newsletter, you must take the risk of receiving spam mails');
    };
})




// /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
checkNewsletter();

function isEmailValid(email) {
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/);
    return emailRegexp.test(email);
}

function isPasswordValid(password) {
    const passwordRegexp = new RegExp(/(?=.*[A-Z])(?=.*[a-z])/);

    return passwordRegexp.test(password);
}

function validate() {

    var valid = true;
    // validate email input not blank
    if (email.value === '') {
        emailError.textContent = 'email required';
        email.style.border = 'solid red 2px';
        valid = false;
    }
    //validate email format
    else if (!isEmailValid(email.value)) {
        emailError.textContent = 'invalid email address';
        email.style.border = 'solid red 2px';
        emailError.style.color = 'red';
        valid = false;
    }
    //validate email success
    else {
        emailError.textContent = 'correct';
        emailError.style.color = 'green';
        email.style.border = 'solid green 2px';
    }

    //validate username not blank
    if (username.value === '') {
        usernameError.textContent = 'username required';
        username.style.border = 'solid red 2px';
        valid = false;
    }
    // validate username length
    else if (username.value.length >= 20) {
        usernameError.textContent = 'username must less than 20 characters';
        username.style.border = 'solid red 2px';
        usernameError.style.color = 'red';
        valid = false;
    }
    //validate username success
    else {
        usernameError.textContent = 'correct';
        usernameError.style.color = 'green';
        username.style.border = 'solid green 2px';
    }

    // validate password input not blank
    if (password1.value === '') {
        password1Error.textContent = 'password required';
        password1.style.border = 'solid red 2px';
        valid = false;
    }
    //validate password length
    else if (password1.value.length < 6) {
        password1Error.textContent = 'password should be at least 6 characters long';
        password1.style.border = 'solid red 2px';
        valid = false;
    }
    //validate password format
    else if (!isPasswordValid(password1.value)) {
        password1Error.textContent = 'password should have at least 1 uppercase letter and 1 lowercase letter';
        password1.style.border = 'solid red 2px';
        password1Error.style.color = 'red';
        valid = false;
    }
    //validate password succesee
    else {
        password1Error.textContent = 'correct';
        password1Error.style.color = 'green';
        password1.style.border = 'solid green 2px';
    }

    // validate confirm password input not blank
    if (password2.value === '') {
        password2Error.textContent = 'please enter password again';
        password2.style.border = 'solid red 2px';
        valid = false;
    }
    //validate passwords match
    else if (password1.value !== password2.value) {
        password1Error.textContent = 'passwords not match';
        password2Error.textContent = '';
        password1.style.border = 'solid red 2px';
        password2.style.border = 'solid red 2px';
        password1Error.style.color = 'red';
        password2Error.style.color = 'red';
        valid = false;

    }
    else {
        password2Error.textContent = 'correct';
        password2Error.style.color = 'green';
        password2.style.border = 'solid green 2px';
    }

    //  validate terms check box
    if (terms.checked == false) {
        termsError.textContent = 'You must accept the terms and conditions';
        termsError.style.color = 'red';
        terms.style.border = 'solid red 2px'
        valid = false;
    } else {
        termsError.textContent = '';
        termsError.style.color = 'green';
        terms.style.border = 'solid green 2px';

    }

    if (!valid) {
        event.preventDefault();
    }
   
    return valid;
}
