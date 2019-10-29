// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
console.log(body);
const botao = document.getElementById('trocaCor');

function geraInteiro(){
    const n=parseInt(Math.random() * 255);
    return n;   
}

botao.addEventListener('click', ()=>{
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    body.style.backgroundColor = `rgb(${r},${g},${b})`
    // 'rgb(' + r + ',' + g + ',' + b + ')';
});





// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string