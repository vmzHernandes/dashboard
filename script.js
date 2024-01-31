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

// ********** ESCONDER/MOSTRAR FORM **********

let addVendaBtn = document.getElementById('adicionarVenda');
addVendaBtn.addEventListener('click', function() {
    let form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none'; 
    }
});

// ********** FIREBASE **********

// import { initializeApp } from 'firebase/app.js'
// import { getDatabase } from "firebase/database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAy7BrMBJ2Ff6_4MIx-S23Wt2sdqVfq_zY",
//     authDomain: "vendas-teste-de836.firebaseapp.com",
//     databaseURL: "https://vendas-teste-de836-default-rtdb.firebaseio.com",
//     projectId: "vendas-teste-de836",
//     storageBucket: "vendas-teste-de836.appspot.com",
//     messagingSenderId: "117985085682",
//     appId: "1:117985085682:web:caa908f518b2b4cc56a86b"
// };

// // Inicia firebase
// const app = firebase.initializeApp(firebaseConfig);
// const firebaseDb = getDatabase(app);

// // Referencia a db
// var formDb = firebase.database().ref('vendas-teste')

// document.getElementById('form').addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();
//     var idMini = getElementVal('id');
//     var marcaMiniForm =  getElementVal('marcaMiniaturaForm');
//     var marcaCarroForm =  getElementVal('marcaCarroForm');
//     var qtdForm =  getElementVal('qtdForm');
//     var custoForm =  getElementVal('custoForm');
//     var vendaForm =  getElementVal('vendaForm');
    
//     saveObject(idMini, marcaMiniForm, marcaCarroForm, qtdForm, custoForm, vendaForm);
// }

// const saveObject = (idMini, marcaMiniForm, marcaCarroForm, qtdForm, custoForm, vendaForm) => {
//     var newForm = formDb.push();
//     newForm.set({
//         idMini: idMini,
//         marcaMiniForm: marcaMiniForm,
//         marcaCarroForm: marcaCarroForm,
//         qtdForm: qtdForm,
//         custoForm: custoForm,
//         vendaForm: vendaForm,
//     });
// };

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }