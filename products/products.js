import { allNotebooks } from '../data/notebooks.js';
import { renderProduct } from './render-product.js';

const productList = document.querySelector('.product-list');

// Render notebooks to DOM using notebook allNotebooks data
allNotebooks.map(notebook => {
    const item = renderProduct(notebook);
    productList.append(item);
});
