let ShoppingCart=[
    {
        product:"Leite -Barnabé",
        measure:"Litro",
        qty:5,
        price:7.8,

    },
    {
        product:"Alcatra-Fribov",
        measure:"kg",
        qty:2,
        price:40,

    },
    {
        product:"Refrigerante-Toca Polar",
        measure:"Pet-2 Litros",
        qty:3,
        price:8.99,

    },
    {
        product:"Arroz -Tio Chicão",
        measure:"Pacote -1kg",
        qty:4,
        price:5.99,

    },
    {
        product:"Peito de Frango-Hot Chicken",
        measure:"Pacote -1kg",
        qty:4,
        price:16.99,

    },
];

ShoppingCart

const valorTotal=ShoppingCart.reduce((acumulator,valorinicial)=>{
    return acumulator += valorinicial.qty *valorinicial.price;
},0); 

    console.log(valorTotal)


const somaQtyprodutos=ShoppingCart.reduce((acumulator,valorinicial)=>{
    return acumulator +  valorinicial.qty
},0) 
console.log(somaQtyprodutos)

