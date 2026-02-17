const singUpButton = document.getElementById('singUpButton');
const singInButton = document.getElementById('singInButton');
const singInForm = document.getElementById('singIn');
const singUpForm = document.getElementById('singup');

singUpButton.addEventListener('click', function() {
    singInForm.style.display = "none";
    singUpForm.style.display = "block";
});

singInButton.addEventListener('click', function() {
    singUpForm.style.display = "none";
    singInForm.style.display = "block";
});