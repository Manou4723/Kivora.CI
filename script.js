const categories = [
  { name: 'Mode', count: '1 240 articles', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80' },
  { name: 'Électronique', count: '860 articles', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=80' },
  { name: 'Maison', count: '920 articles', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80' },
  { name: 'Beauté', count: '640 articles', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80' }
];

const products = [
  { name: 'Sac artisanal en cuir', price: '18 500 FCFA', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' },
  { name: 'Ensemble wax moderne', price: '25 000 FCFA', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=800&q=80' },
  { name: 'Montre élégante', price: '32 000 FCFA', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80' }
];

const categoryGrid = document.querySelector('#category-grid');
categoryGrid.innerHTML = categories.map(category => `
  <a class="category-card" href="#products" style="background-image:url('${category.image}')">
    <strong>${category.name}</strong>
    <span>${category.count}</span>
  </a>
`).join('');

const productGrid = document.querySelector('#product-grid');

function renderProducts(items) {
  productGrid.innerHTML = items.length ? items.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    </article>
  `).join('') : '<p>Aucun produit trouvé pour cette recherche.</p>';
}

renderProducts(products);

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventEvent;
  const query = document.querySelector('#search-input').value.trim().toLowerCase();
  renderProducts(products.filter(product => product.name.toLowerCase().includes(query)));
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#year').textContent = new Date().getFullYear();
