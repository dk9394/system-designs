import './products.css';

import { IProduct, IProductResponse } from './product.interface';

export const productsContainer = document.createElement('section');
const productsElm = document.createElement('article');
productsElm.classList.add('products-list');

let products: IProduct[] = [];
let ascProducts: IProduct[] = [];
let descProducts: IProduct[] = [];

async function fetchProducts() {
	try {
		products = await fetch('https://dummyjson.com/products')
			.then((res) => res.json())
			.then((data: IProductResponse) => data.products);

		renderFilters();
		renderProducts(products);
	} catch (err) {
		console.log(err);
		renderFilters();
		renderProducts([]);
	}
}
fetchProducts();

function renderProducts(productList: IProduct[]) {
	const list = productList.slice();
	productsElm.innerHTML = '';
	list.forEach((product) => {
		const template = `
			<section class="images">
				<img src="${product?.images[0]}" alt="${product?.title}" />
			</section>
			<section class="details">
				<h1 class="title">${product?.title}</h1>
				<p class="description">${product?.description}</p>
				<p class="description">${product?.price}</p>
			</section>
		`;

		const card = document.createElement('section');
		card.classList.add('card');
		card.innerHTML = template;
		productsElm.appendChild(card);
	});
	productsContainer.appendChild(productsElm);
}

function renderFilters() {
	const filtersElm = document.createElement('section');
	filtersElm.classList.add('filters');

	const template = `
		<select name="select-cost-filter" id="select-cost-filter">
			<option value="null">Select Filter</option>
			<option value="asc">Low to high cost</option>
			<option value="desc">High to low cost</option>
		</select>
	`;

	filtersElm.innerHTML = template;
	productsContainer.appendChild(filtersElm);

	const selectElm = document.querySelector('#select-cost-filter');

	selectElm?.addEventListener('change', function (e) {
		// @ts-expect-error: value exists
		const value = e.target.value;

		if (value === 'asc') {
			ascProducts = products.slice().sort((a, b) => a.price - b.price);
			renderProducts(ascProducts);
		} else if (value === 'desc') {
			descProducts = products.slice().sort((a, b) => b.price - a.price);
			renderProducts(descProducts);
		} else {
			renderProducts(products);
		}
	});
}
