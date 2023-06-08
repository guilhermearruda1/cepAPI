async function buscaEndereco(cep) {
    var msgErro = document.getElementById('erro');
    msgErro.innerHTML = "";

    try {

        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP Inexistente!')
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;


        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro) {
        msgErro =  alert('CEP Inválido. Favor, inserir um CEP correto') //`<p> CEP Inválido. Favor, inserir um CEP correto</p>`
        console.log(erro)
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

/* numero complemento*/

/*
let ceps = ['07022050', '01001000', '07243590']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

Promise.all(conjuntoCeps).then(respostas => console.log(respostas))*/