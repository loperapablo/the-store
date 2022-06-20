let name_product = document.getElementById(
	'name_product'
);
let image = document.getElementById(
	'image_product'
);
let price = document.getElementById(
	'price_product'
);
let quantity = document.getElementById(
	'quantity_product'
);

let btnAddProduct = document.getElementById(
	'btnAddProduct'
);
let listProducts = document.getElementById(
	'listProducts'
);

const products = [
	{
		name_product: 'Bicleta 1',
		image: './assets/png/img1.png',
		price: 54000,
		quantity: 3,
	},
	{
		name_product: 'Bicleta 2',
		image: './assets/png/img2.png',
		price: 54000,
		quantity: 3,
	},
	{
		name_product: 'Bicleta 3',
		image: './assets/png/img3.png',
		price: 54000,
		quantity: 3,
	},
	{
		name_product: 'Bicleta 1',
		image: './assets/png/img1.png',
		price: 54000,
		quantity: 3,
	},
	{
		name_product: 'Bicleta 2',
		image: './assets/png/img2.png',
		price: 54000,
		quantity: 3,
	},
	{
		name_product: 'Bicleta 3',
		image: './assets/png/img3.png',
		price: 54000,
		quantity: 3,
	},
];

const AddProduct = () => {
	/* Push es un método que nos permite agregar al final un nuevo elemnto */
	products.push({
		name_product: name_product.value,
		image: image_product.value,
		price: price_product.value,
		quantity: quantity_product.value,
	});
	for (
		let index = 0;
		index < products.length;
		index++
	) {
		listProducts.innerHTML = `<div>
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
      <div class="card-image">
          <img src=${products[index].image}>
          <span class="card-title">${products[index].name_product}</span>
        </div>
        <div class="card-content white-text">
          <span class="card-title">${products[index].name_product}</span>
          <p>Precio ${products[index].price}</p>
          <p>Cantidad ${products[index].quantity}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
    </div>`;
	}
	console.log(products);
};

btnAddProduct.addEventListener(
	'click',
	AddProduct
);
