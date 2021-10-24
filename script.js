let num = document.getElementById("txtValor");
let lista = document.getElementById("localArm");
let res = document.getElementById("res");
let valores = [];
// verificar o campo
function myNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return  true
    } else {
        return false
    }

};

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }


};

// adicionar o numero 
function adicionarN() {
    if (myNum(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert("[ERRO] Valores invalidos ou ja adicionado .");
    }
   num.value = '';
   num.focus(); 

   
};

function finalizar() {
    if (valores.length == 0 ) {
        window.alert('[ERRO] valores indisponiveis.');
    } else {
        let total = valores.length;
        let maior = valores [0];
        let menor = valores [0];
        let soma = 0 ;
        let media = 0 ;
// verificando que eo maior eo menor valor
        for(let pos in valores) {
            soma += valores[pos];
            media 

            if (valores[pos] > maior ){
                maior = valores[pos];
            }
            if (valores[pos] < menor ){
                menor = valores[pos];
            }
        };
        media = soma / total ;
        
        
        res.innerHTML = '';
        res.innerHTML += `<p>O numeros de itens adicionados e ${total} .</p>` ;
        res.innerHTML += `<p>O maior número adicionado é ${maior}.</p> `;
        res.innerHTML += `<p>O menor número adicionado é ${menor}. </p>`;
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
        res.innerHTML += `<p>A media entre os numeros adicionados é ${media}.</p>`


    }  


}