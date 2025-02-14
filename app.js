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
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(function (amigo) {
        let li = document.createElement('li'); // Cria um novo <li>
        li.textContent = amigo; // Define o nome dentro do <li>
        lista.appendChild(li); // Adiciona o <li> na <ul>
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { //Se a lista estiver vazia
        alert("A lista de amigos está vazia! Adicione nome antes de sortear.");
        return; //Para a execução da  função
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // "Math.floor" Arredonda o número para baixo, garantindo um índice válido.
    let amigoSorteado = amigos[indiceSorteado];
    let resultadoElemento = document.getElementById('resultado'); // Pega o elemento onde o resulatado será exibido
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`; // Define o nome sorteado como um item de lista
}