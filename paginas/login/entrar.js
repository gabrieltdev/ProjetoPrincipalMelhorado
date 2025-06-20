//validação usada somente para portfolio e não para uma aplicação real
let emailUsuario = 'teste@teste.com';
let senhaUsuario = '12345678';

function fazerLogin() {
    const alerta = document.getElementById('alerta')

    event.preventDefault()

    if (validarEmail() && validarSenha()) {
        window.location.href = "/paginas/home/home.html";
    } else {
        alerta.textContent = "Email ou senha inválidos.";
    }
}

function validarEmail() {
    let email = document.getElementById('email').value;

    return email === emailUsuario
    }

function validarSenha() {
    let senha = document.getElementById('senha').value;

    return senha === senhaUsuario
}

document.getElementById('botaoAcessar').addEventListener('click', fazerLogin)