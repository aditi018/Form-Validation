console.log("This is index.js file for project4")
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validPhone = false;
let validEmail = false;

$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log('name is blurred');
    // Validating name
    let reg = /^[A-Z]([0-9a-zA-Z]){2,20}$/;
    let str = name.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("name is valid");
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('name is not valid');
        name.classList.add('is-invalid');
        validName = false;
    }
})
email.addEventListener('blur', () => {
    console.log('email is blurred');
    // Validating email
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // Validating phone
    let reg = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("phoneNo. is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('phoneNo. is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button has been clicked');
    if (validName && validEmail && validPhone) {
        console.log("Valid name , email, phone . Submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log("invalid name or username or email. Form cannot be submitted");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
    }
})




