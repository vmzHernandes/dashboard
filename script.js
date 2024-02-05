// ********** CONTAS **********

// Soma custo
let somaCusto = 0;
for (var custo in vendas) {
    if (vendas.hasOwnProperty(custo)) {
        somaCusto += vendas[custo].custo;
    }
}

// Soma qtd
let somaQtd = 0;
for (var qtd in vendas) {
    if (vendas.hasOwnProperty(qtd)) {
        somaQtd += vendas[qtd].qtd;
    }
}

// Soma das vendas
let somaVendas = 0;
for (var venda in vendas) {
    if (vendas.hasOwnProperty(venda)) {
        somaVendas += vendas[venda].venda;
    }
}

// Lucro
let lucro = somaVendas - somaCusto;


// ********** ANIMAÇÃO DOS NÚMEROS **********
// Custo
let custoTotal = document.getElementById('custoTotal');
let intervaloCusto = 500;
let numFinalCusto = somaCusto.toFixed(2);
let numInicialCusto = numFinalCusto * 0.98;
let duracaoCusto = intervaloCusto / numFinalCusto;

let contadorCusto = setInterval(function() {
    numInicialCusto += 1;
    custoTotal.textContent = 'R$ ' + numInicialCusto.toFixed(2);
    if (numInicialCusto >= numFinalCusto) {
        custoTotal.textContent = 'R$ ' + numFinalCusto;
        clearInterval(contadorCusto);
    }
}, duracaoCusto);

// Vendas
let vendasTotal = document.getElementById('vendaTotal');
let intervaloVendas = 500;
let numFinalVendas = somaVendas.toFixed(2);
let numInicialVendas = numFinalVendas * 0.98;
let duracaoVendas = intervaloVendas / numFinalVendas;

let contadorVendas = setInterval(function() {
    numInicialVendas += 1;
    vendasTotal.textContent = 'R$ ' + numInicialVendas.toFixed(2);
    if (numInicialVendas >= numFinalVendas) {
        vendasTotal.textContent = 'R$ ' + numFinalVendas;
        clearInterval(contadorVendas);
    }
}, duracaoVendas);

// Lucro
let lucroTotal = document.getElementById('lucroTotal');
let intervaloLucro = 500;
let numFinalLucro = lucro.toFixed(2);
let numInicialLucro = numFinalLucro * 0.95;
let duracaoLucro = intervaloLucro / numFinalLucro;

let contadorLucro = setInterval(function() {
    numInicialLucro += 1;
    lucroTotal.textContent = 'R$ ' + numInicialLucro.toFixed(2);
    if (numInicialLucro >= numFinalLucro) {
        lucroTotal.textContent = 'R$ ' + lucro.toFixed(2);
        clearInterval(contadorLucro);
    }
}, duracaoLucro);

// Total de vendidas
let vendidasTotal = document.getElementById('vendidasTotal');
let intervaloVendidas = 1000;
let numFinalVendidas = somaQtd;
let numInicialVendidas = Math.floor(numFinalVendidas * 0.1);
let duracaoVendidas = intervaloVendidas / numFinalVendidas;

let contadorVendidas = setInterval(function() {
    numInicialVendidas += 1;
    vendidasTotal.textContent = numInicialVendidas;
    if (numInicialVendidas >= numFinalVendidas) {
        vendidasTotal.textContent = numFinalVendidas;
        clearInterval(contadorVendidas);
    }
}, duracaoVendidas);

// ********** CONTROLE DO FORMULÁRIO **********

// Fazer aparecer/sumir
let label = document.querySelectorAll('form label');
let addVendaBtnNav = document.getElementById('adicionarVenda');
let addVendaBtnForm = document.getElementById('submit');


addVendaBtnNav.addEventListener('click', function() {
    let form = document.getElementById('form');
    if (form.style.display === 'none') {
        // Muda texto no menu de navegação
        addVendaBtnNav.textContent = 'FECHAR'

        // Estilização do form e labels
        form.style.display = 'flex';
        form.style.justifyContent = 'space-around';
        form.style.padding = '1rem';
        form.style.paddingBottom = '0';
        for (let i = 0; i < label.length; i++) {
            label[i].style.display = 'flex';
            label[i].style.alignItems = 'center';
            label[i].style.fontSize = '1.25rem'
        }

        // Estilização do botão de adicionar venda
        addVendaBtnForm.style.background = 'transparent'
        addVendaBtnForm.style.color = '#c4c4c4'
        addVendaBtnForm.style.border = 'none'
        addVendaBtnForm.style.borderBottom = '1px solid #c4c4c4'
        addVendaBtnForm.style.cursor = 'pointer'
        addVendaBtnForm.style.fontSize = '1.25rem'
        addVendaBtnForm.style.textTransform = 'uppercase'

    } else {
        form.style.display = 'none'; 
        addVendaBtn.textContent = 'ADICIONAR VENDA'
        small.style.display = 'none';
    }
});

// Texto de venda adicionada
let small = document.getElementById('small');
let submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    if (form.style.display === 'none') {
        small.style.display = 'none';
    } else {
        small.style.display = 'flex';
        small.style.color = 'green'
        small.style.justifyContent = 'center'
        small.style.paddingTop = '1.5rem'
        small.style.fontSize = '1rem'
    }
})
