let emailUsuario = 'teste@teste.com';
let senhaUsuario = '12345678';

function fazerLogin() {

    event.preventDefault()

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if ( email===emailUsuario && senha===senhaUsuario ) {
        window.location.href = "/paginas/home/home.html";
    } else {
        return
    }
}

//document.getElementById('botaoAcessar').addEventListener('click', fazerLogin); não funcionou so quando tirei o ponto
document.getElementById('botaoAcessar').addEventListener('click', fazerLogin)
//se eu clicar no formulario ativa a função
