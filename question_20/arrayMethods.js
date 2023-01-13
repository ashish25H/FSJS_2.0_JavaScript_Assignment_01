// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add meat
shoppingCart.includes('Meat')?console.log(`Already added`):shoppingCart.unshift('Meat');
//add sugar
shoppingCart.includes('Sugar')?console.log(`Already added`):shoppingCart.push('Sugar');

//remove Honey
console.log(shoppingCart);

for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] === 'Honey'){
        shoppingCart.splice(i,1);
    }
}

console.log(shoppingCart);


//Modify tea to green tea
for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] === 'Tea'){
        shoppingCart.splice(i,1,'Green Tea');
    }
}
console.log(shoppingCart);
