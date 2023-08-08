const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){
    console.log(`Cliente:${this.nomeDoCliente}
    Total de itens: ${this.calcularTotalDeItens()} itens
    Total a pagar: R$${this.calcularTotalAPagar()/100},00`)
    },
    addProduto: function(produtos){
        for(let produto of this.produtos){
            if(produto.id === this.id){
                return;
            }else{
                this.produtos.push(produtos)
                return;
            }
        }
    },
    imprimirDetalhes : function(){
        for (let produto of this.produtos){
            console.log(`Item ${this.produtos.indexOf(produto)+1} - ${produto.nome} - ${produto.qtd} und - R$${produto.qtd*produto.precoUnit/100},00`)
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$${this.calcularTotalAPagar()/100},00`)
    },
    calcularTotalDeItens: function(){
         let somaQuantdd = 0;
            for(let produto of this.produtos){ 
            somaQuantdd += produto.qtd
        }
        return somaQuantdd;
    },
    calcularTotalAPagar : function(){
        let somaDin = 0;
        for(let produto of this.produtos){
            somaDin+= produto.qtd*produto.precoUnit;
        }
        return somaDin;
    },
    calcularDesconto: function(){
        let desconto10 = 0;
        let menorValor = 0;
        if(this.calcularTotalDeItens()>4){
             menorValor = this.produtos[0].precoUnit;
            for(i = 1; i<this.produtos.length;i++){
                if(menorValor>this.produtos[i]){
                    menorValor = this.produtos[i].precoUnit;
                }
            }
        }
         if(this.calcularTotalAPagar()>10000){
             desconto10 = this.calcularTotalAPagar()*0.1;
        }  
        if(desconto10 > menorValor){
            return desconto10;
        }else{
            return menorValor;
        }
    }
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis,);
carrinho.addProduto(novaBermuda);
console.log(carrinho.calcularDesconto());
