export const renderProduct = (notebook) => {
  const li = document.createElement('li');

  const category = notebook.category;
  li.classList.add(category);

  const p = document.createElement('p');
  p.textContent = notebook.name;

  const img = document.createElement('img');
  img.src = `../assets/notebook-assets/${notebook.image}`;
  img.alt = notebook.description;

  const descriptionPTag = document.createElement('p');
  descriptionPTag.textContent = notebook.description;

  const pricePTag = document.createElement('p');
  pricePTag.textContent = notebook.price.toFixed(2);
  pricePTag.classList.add('price');

  const button = document.createElement('button');
  button.value = notebook.id;
  button.textContent = 'Add to Cart'

  li.append(
    p,
    img,
    descriptionPTag,
    pricePTag,
    button
  );

  return li;
}
