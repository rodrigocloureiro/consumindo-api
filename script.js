// Utilizar as API's abaixo:
// https://github.com/raniellyferreira/economy-api
// https://docs.awesomeapi.com.br/api-de-moedas

let cep = document.querySelector('input[type="text"]');
// const h3 = document.querySelector('h3');
const campo = document.querySelectorAll('.campo');
const logr = document.querySelector('#logr');
const num = document.querySelector('#num');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');
const ibge = document.querySelector('#ibge');

function consultar() {

  if(cep.value.length == 8) {
  
    let xhr = new XMLHttpRequest();
  
    xhr.open('GET', `https://viacep.com.br/ws/${cep.value}/json/`);
    
    xhr.send(null);
    
    xhr.onreadystatechange = () => {
      
      if(xhr.readyState == 4) {
        
        let response = JSON.parse(xhr.responseText);
  
        console.log(response);
  
        if(response.erro) {
          console.warn('CEP Inválido');
          h3.textContent = 'CEP Inválido';
        } else {
          // h3.textContent = `${response.logradouro}, ${response.complemento} - ${response.bairro}, ${response.localidade}`;
          logr.textContent = response.logradouro;
          num.textContent = response.complemento;
          bairro.textContent = response.bairro;
          cidade.textContent = response.localidade;
          uf.textContent = response.uf;
          ibge.textContent = response.ibge;

          for(let i = 0; i < campo.length; i++) {
            if(i %2 != 0)
              campo[i].classList.add('bg-orange');
          }
        }
      }
      
    };

  } else {
    alert('O CEP precisa conter 8 dígitos');
  }

}