//validação usada somente para portfolio e não para uma aplicação real
const emailUsuario = 'teste@teste.com';
const senhaUsuario = '12345678';

function fazerLogin() {
    const alerta = document.getElementById('alerta')
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value;


    event.preventDefault()

    if (email === "" && senha === "") {
        alerta.textContent = "Preencha os campos"
    } else if (email === "") {
        alerta.textContent = "Preencha o campo email"
    } else if (senha === "") {
        alerta.textContent = "Preencha o campo senha"
    } else if (validarEmail() && validarSenha()) {
        window.location.href = "../../paginas/home/home.html";
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