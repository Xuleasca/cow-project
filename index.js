
const cowsay = require('cowsay');
const myMessage = require('./information.js')


console.log(cowsay.say({
	text : `${myMessage()}`,
	e : "oO",
	T : "U "
}));