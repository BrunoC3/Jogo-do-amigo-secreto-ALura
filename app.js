//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value
    console.log(nome);
    if (nome == '') {
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(nome)
        document.getElementById('amigo').value = ''
    }
    listarAmigos()
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
        document.getElementById('resultado').innerHTML = amigoSorteado
    } else {
        alert('Por favor, adicione amigos para sortear.')
        return
    }
}