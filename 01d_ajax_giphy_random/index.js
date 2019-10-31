// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

// const img = document.getElementById('imagem')

const request = new XMLHttpRequest();
request.onreadystatechange = mostraGif;

const url = `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=3&offset=0`
request.open('GET', url);
request.send();


function mostraGif() {

    if(request.readyState === 4 && request.status === 200){            
        const response = request.response;             
        const json= JSON.parse(response);
        console.log(json);
        
        // const data= json.data[0].images.original.url;        
        const body = document.body;
        body.innerHTML = `
          <img src=${json.data[0].images.original.url}>
          <img src=${json.data[1].images.original.url}>
          <img src=${json.data[2].images.original.url}>        
        `
            // img.src= data;        
    } else {
                
    }
        
}

