const botao = document.querySelector('button');

const imagem1 = document.querySelector('#personagem-1 img');
const nomeDoPersonagem1 = document.querySelector('#personagem-1 .nome');
const especie1 = document.querySelector('#personagem-1 .especie');
const condicao1 = document.querySelector('#personagem-1 .status');
const imagem2 = document.querySelector('#personagem-2 img');
const nomeDoPersonagem2 = document.querySelector('#personagem-2 .nome');
const especie2 = document.querySelector('#personagem-2 .especie');
const condicao2 = document.querySelector('#personagem-2 .status');
const imagem3 = document.querySelector('#personagem-3 img');
const nomeDoPersonagem3 = document.querySelector('#personagem-3 .nome');
const especie3 = document.querySelector('#personagem-3 .especie');
const condicao3 = document.querySelector('#personagem-3 .status');

traduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sabemos';
    } else if (data.status == 'Alive') {
        return 'Sim';
    } else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = traduzirCondicao(data);
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = traduzirCondicao(data);
    });
}

pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = traduzirCondicao(data);
    });
}

pegarPersonagens = () => {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
}

botao.onclick = pegarPersonagens;