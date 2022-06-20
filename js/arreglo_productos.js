const products = [
	{
		name: 'Bicicleta montaña',
		image: './assets/bicicleta.jpg',
		price: 200,
		quantity: 2,
	},
	{
		name: 'Iphone 7',
		image: './assets/celular.jpg',
		price: 500,
		quantity: 4,
	},
	{
		name: 'Gafas de sol',
		image: './assets/lentes.jpg',
		price: 100,
		quantity: 6,
	},
	{
		name: 'Juego comedor',
		image: './assets/mesa.jpg',
		price: 320,
		quantity: 1,
	},
];

var listProducts = products.map(function (
	product
) {
	return (
		'<table><tr><th class="th-mod"><img class="img-tabla" src="' +
		product.image +
		'"></th> <th class="th-mod"><p class="p-tabla">' +
		product.name +
		'</p></th>  <th class="th-mod"><p class="p-tabla"> $' +
		product.price +
		'</p></th> <th class="th-mod"><p class="p-tabla">' +
		product.quantity +
		'</p></th> <th class="th-mod"><p class="p-tabla"> $' +
		product.quantity * product.price +
		'</p></th></tr></table>'
	);
});

document.getElementById(
	'listProducts'
).innerHTML = listProducts;
