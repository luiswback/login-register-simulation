let btn = document.querySelector(".fa-eye");

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector("#senha");
    if (inputSenha.getAttribute("type") === "password") {  //pega o tipo do atributo se for password
        inputSenha.setAttribute("type", "text") //tranforma em text
    } else {
        inputSenha.setAttribute("type", "password") //tranforma em password dnv

    }
});


function entrar() {
    let user = document.querySelector("#usuario");
    let userLabel = document.querySelector("#userLabel");

    let password = document.querySelector("#senha");
    let passwordLabel = document.querySelector("#passwordLabel");

    let msgError = document.querySelector("#msgError");

    let userList = []

    let userValid = {
        nome: '',
        usuario: '',
        senha: ''
    }

    userList = JSON.parse(localStorage.getItem('listaUser'))

   userList.forEach((item) =>{
       if (user.value === item.usuario && password.value === item.senha){

           userValid ={
               nome: item.nome,
               usuario: item.usuario,
               senha: item.senha
           }

       }
   })
        //Validando o login,comparando as informações do meu input com meu localStorage
    if (user.value === userValid.usuario && password.value === userValid.senha){
        msgSucces.setAttribute('style', 'display:block')
        msgSucces.innerHTML = 'Conectando-se ao servidor...'
        setTimeout(()=>{
            window.location.href = 'PaginaInicial.html'

        }, 2000)

        //Gerando um "token" e fazendo ele começar a partir do 3 numero dele.
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }else{
        userLabel.setAttribute('style', 'color: red');
        passwordLabel.setAttribute('style', 'color: red');
        user.setAttribute('style', 'border-color: red');
        password.setAttribute('style', 'border-color: red');

        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'usuário ou senha incorretos.'

        user.focus()

    }
}