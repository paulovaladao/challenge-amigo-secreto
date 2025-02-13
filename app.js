let amigos = [] // Array global para armazenar os amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Captura o input pelo ID
    let nome = inputAmigo.value.trim(); // Captura o valor digitado e remove espaços extras

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; // Interrompe a função se o campo estiver vazio
    }
    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        return; // Interrompe a função se o nome já existir
    }
    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Chama a função que atualiza a lista na tela
    inputAmigo.value = ''; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); // Captura a <ul> da lista
    lista.innertHTML = ''; // Limpa a lista antes dea atualizar

    amigos.forEach(function (amigo) {
        let li = document.createElement('li'); // Cria um novo <li>
        li.textContent = amigo; // Define o nome dentro do <li>
        lista.appendChild(li); // Adiciona o <li> na <ul>
    });
}