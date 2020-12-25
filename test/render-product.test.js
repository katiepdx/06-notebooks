// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderProduct } from '../products/render-product.js'

const test = QUnit.test;

test('tests that the render product function matches the outerHTML', (expect) => {
  //Arrange
  // blank notebook product
  const blankNotebook = {
    id: 'blanknotebook635',
    name: 'Blank Notebook',
    image: 'blank-notebook.jpg',
    description: 'A blank notebook',
    category: 'blank',
    price: 2.00
  }
  
  // expected outerHTML
  const expected = '<li class="blank"><p>Blank Notebook</p><img src="../assets/notebook-assets/blank-notebook.jpg" alt="A blank notebook"><p>A blank notebook</p><p class="price">2.00</p><button value="blanknotebook635">Add to Cart</button></li>'

  //Act 
  // Call the function you're testing and set the result to a const
  const renderToDOM = renderProduct(blankNotebook);
  const productHTML = renderToDOM.outerHTML;

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(productHTML, expected);
});
