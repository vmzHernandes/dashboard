var vendas =  JSON.parse(localStorage.getItem('vendas')) || {
    miniatura_exemplo_1: {
        id: 'miniatura_exemplo_1',
        marcaMiniatura: 'marca_exemplo_1',
        marcaCarro: 'nissan',
        qtd: 2,
        custo: 200.50,
        venda: 280,
    },
    miniatura_exemplo_2: {
        id: 'miniatura_exemplo_2',
        marcaMiniatura: 'marca_exemplo_1',
        marcaCarro: 'nissan',
        qtd: 5,
        custo: 650.98,
        venda: 800,
    },
    miniatura_exemplo_3: {
        id: 'miniatura_exemplo_3',
        marcaMiniatura: 'marca_exemplo_1',
        marcaCarro: 'datsun',
        qtd: 8,
        custo: 1000.52,
        venda: 1455,
    },
    miniatura_exemplo_4: {
        id: 'miniatura_exemplo_4',
        marcaMiniatura: 'marca_exemplo_2',
        marcaCarro: 'datsun',
        qtd: 15,
        custo: 2300.12,
        venda: 2800,
    },
    miniatura_exemplo_5: {
        id: 'miniatura_exemplo_5',
        marcaMiniatura: 'marca_exemplo_2',
        marcaCarro: 'chevrolet',
        qtd: 10,
        custo: 1500.74,
        venda: 1800,
    },
    miniatura_exemplo_6: {
        id: 'miniatura_exemplo_6',
        marcaMiniatura: 'marca_exemplo_3',
        marcaCarro: 'chevrolet',
        qtd: 3,
        custo: 750.74,
        venda: 1000,
    },
    miniatura_exemplo_7: {
        id: 'miniatura_exemplo_7',
        marcaMiniatura: 'marca_exemplo_4',
        marcaCarro: 'chevrolet',
        qtd: 4,
        custo: 645.64,
        venda: 800,
    },
    miniatura_exemplo_8: {
        id: 'miniatura_exemplo_8',
        marcaMiniatura: 'marca_exemplo_4',
        marcaCarro: 'chevrolet',
        qtd: 6,
        custo: 423.55,
        venda: 560,
    },
    miniatura_exemplo_9: {
        id: 'miniatura_exemplo_9',
        marcaMiniatura: 'marca_exemplo_4',
        marcaCarro: 'chevrolet',
        qtd: 8,
        custo: 745.65,
        venda: 1145,
    }
}

export {vendas, adicionarProduto, vendasJSON};

function adicionarProduto(produto) {
    vendas[produto.id] = produto;
    console.log('Objeto vendas modificado')
}

function vendasJSON() {
    localStorage.setItem('vendas', JSON.stringify(vendas));
}