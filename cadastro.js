let btn = document.querySelector('#eyePassword');
let btnVerify = document.querySelector('#eyeValidation');

let name = document.querySelector("#nome");
let labelName = document.querySelector("#labelNome");
let validName = false


let user = document.querySelector("#usuario");
let userLabel = document.querySelector("#labelUsuario");
let validUser = false


let senha = document.querySelector("#senha");
let senhaLabel = document.querySelector("#labelSenha");
let validSenha = false


let confirmPassword = document.querySelector("#confirmarSenha");
let confirmPasswordLabel = document.querySelector("#labelConfirmarSenha");
let validConfirSenha = false


let msgError = document.querySelector("#msgError");
let msgSucces = document.querySelector("#msgSucces");


name.addEventListener('keyup', () => {
    if (name.value.length <= 2) {
        labelName.setAttribute('style', 'color:red')
        labelName.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        name.setAttribute('style', 'border-color:red')
    } else {
        labelName.setAttribute('style', 'color:green')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color:green')
        validName = true


    }
})

user.addEventListener('keyup', () => {
    if (user.value.length <= 4) {
        userLabel.setAttribute('style', 'color:red')
        userLabel.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
        user.setAttribute('style', 'border-color:red')
    } else {
        userLabel.setAttribute('style', 'color:green')
        userLabel.innerHTML = 'Usuário'
        user.setAttribute('style', 'border-color:green')
        validUser = true


    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        senhaLabel.setAttribute('style', 'color:red')
        senhaLabel.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color:red')
    } else {
        senhaLabel.setAttribute('style', 'color:green')
        senhaLabel.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true


    }
})


confirmPassword.addEventListener('keyup', () => {
    if (senha.value !== confirmPassword.value) {
        confirmPasswordLabel.setAttribute('style', 'color:red')
        confirmPasswordLabel.innerHTML = 'Confirmar senha *As senhas não conferem'
        confirmPassword.setAttribute('style', 'border-color:red')
    } else {
        confirmPasswordLabel.setAttribute('style', 'color:green')
        confirmPasswordLabel.innerHTML = 'Confirmar senha'
        confirmPassword.setAttribute('style', 'border-color:green')
        validConfirSenha = true


    }
})

function voltar(){

    msgSucces.setAttribute('style', 'display: block');
    msgSucces.innerHTML = "<strong>Aguarde um momento...</strong>"
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = ""
    setTimeout(()=>{
        window.location.href = "index.html"

    }, 1000)
}


function cadastrar() {
    if (validName && validUser && validSenha && validConfirSenha) {

        let listaUser = JSON.parse(localStorage.getItem("listaUser") || '[]')

        listaUser.push(
            {
                nome: name.value,
                usuario: user.value,
                senha: senha.value,
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSucces.setAttribute('style', 'display: block');
        msgSucces.innerHTML = "<strong>Cadastrando Usuário...</strong>"
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = ""

        setTimeout(()=>{
            window.location.href = "index.html"

        }, 2000)

    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgSucces.innerHTML = ""
        msgSucces.setAttribute('style', 'display: none');


    }

}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha");
    if (inputSenha.getAttribute("type") === "password") {  //pega o tipo do atributo se for password
        inputSenha.setAttribute("type", "text") //tranforma em text
    } else {
        inputSenha.setAttribute("type", "password") //tranforma em password dnv

    }
})


btnVerify.addEventListener('click', () => {
    let inputSenha = document.querySelector("#confirmarSenha");
    if (inputSenha.getAttribute("type") === "password") {  //pega o tipo do atributo se for password
        inputSenha.setAttribute("type", "text") //tranforma em text
    } else {
        inputSenha.setAttribute("type", "password") //tranforma em password dnv

    }
})



