

const carrito = require('./carrito');
const moment = require('moment');

//format from momentjs
console.log(moment().format("HH:mm"));

//items from carrito.js
carrito.items.forEach(function(arg1, arg2) {
    console.log(arg1 + " - " + arg2);
});

//itemsTotal from carrito.js
console.log(carrito.itemsTotal);
