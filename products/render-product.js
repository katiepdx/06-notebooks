export const renderProduct = (notebook) => {
  const li = document.createElement('li');

  const category = notebook.category;
  li.classList.add(category);

  const p = document.createElement('p');
  p.textContent = notebook.name;
  li.append(p)

  const img = document.createElement('img');
  img.src = `../assets/notebook-assets/${notebook.image}`;
  img.alt = notebook.description;
  li.append(img)

  const descriptionPTag = document.createElement('p');
  descriptionPTag.textContent = notebook.description;
  li.append(descriptionPTag);

  const pricePTag = document.createElement('p');
  pricePTag.textContent = notebook.price.toFixed(2);
  pricePTag.classList.add('price');
  li.append(pricePTag);

  const button = document.createElement('button');
  button.value = notebook.id;
  button.textContent = 'Add to Cart'
  li.append(button);

  return li;
}
