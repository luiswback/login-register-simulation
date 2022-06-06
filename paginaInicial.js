let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userLogado.nome}! Seja bem vindo(a)`;

if (localStorage.getItem('token')=== null){
    alert('Você precisa estar logado para acessar essa página!')
    window.location.href = 'index.html'
}


function sair(){

    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'index.html'

}