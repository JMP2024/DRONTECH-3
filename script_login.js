// Botones y contenedores de formularios
const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in');

// Alternar visibilidad de formularios al hacer clic en los botones
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

// Simulación de una lista de correos electrónicos registrados
const registeredEmails = ['example@gmail.com', 'test@gmail.com', 'user@gmail.com'];

// Validar formulario de registro
function validateRegisterForm() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const nameError = document.getElementById('registerNameError');
    const emailError = document.getElementById('registerEmailError');
    const passwordError = document.getElementById('registerPasswordError');

    const gmailPattern = /^[^\s@]+@gmail\.com$/;

    let isValid = true;

    if (!name) {
        nameError.textContent = 'El campo de nombre no puede estar vacío.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!email) {
        emailError.textContent = 'El campo de correo electrónico no puede estar vacío.';
        isValid = false;
    } else if (!gmailPattern.test(email)) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico de Gmail válido.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!password) {
        passwordError.textContent = 'El campo de contraseña no puede estar vacío.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Formulario de registro válido. Enviando formulario...');
    }
}

// Validar formulario de inicio de sesión
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');

    let isValid = true;

    if (!email) {
        emailError.textContent = 'El campo de correo electrónico no puede estar vacío.';
        isValid = false;
    } else if (!registeredEmails.includes(email)) {
        emailError.textContent = 'Esta cuenta no existe.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!password) {
        passwordError.textContent = 'El campo de contraseña no puede estar vacío.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Formulario de inicio de sesión válido. Iniciando sesión...');
    }
}

// Manejar el evento de presionar la tecla "Enter" en los formularios de registro
document.getElementById('registerForm').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        validateRegisterForm();
    }
});

// Manejar el evento de presionar la tecla "Enter" en los formularios de inicio de sesión
document.getElementById('loginForm').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        validateLoginForm();
    }
});
