// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

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
// var formDb = firebaseDb.database().ref('vendas-teste')

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

//******************************* */


  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, ref, set, get, child, } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy7BrMBJ2Ff6_4MIx-S23Wt2sdqVfq_zY",
    authDomain: "vendas-teste-de836.firebaseapp.com",
    databaseURL: "https://vendas-teste-de836-default-rtdb.firebaseio.com",
    projectId: "vendas-teste-de836",
    storageBucket: "vendas-teste-de836.appspot.com",
    messagingSenderId: "117985085682",
    appId: "1:117985085682:web:caa908f518b2b4cc56a86b"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

document.getElementById('submit').addEventListener('click', function(e) {
    set(ref(db, 'marcaMiniatura/' + document.getElementById('marcaMiniaturaForm').value), {
        marcaMiniatura: document.getElementById('marcaMiniaturaForm').value,
        marcaCarro: document.getElementById('marcaCarroForm').value,
        qtd: document.getElementById('qtdForm').value,
        custo: document.getElementById('custoForm').value,
        venda: document.getElementById('vendaForm').value
    });
    // alert('deu bom');
})