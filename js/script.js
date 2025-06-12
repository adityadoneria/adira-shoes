// WhatsApp Number
const whatsappNumber = "919876543210";

// Products Array
const products = [
  { id: 1, name: "Brown Oxford Formal", description: "Textured brown leather oxford shoes, lace-up and ideal for formal wear.", image: "images/PHOTO-2025-06-12-12-48-51.jpg" },
  { id: 2, name: "Classic Brown Oxfords", description: "Smooth leather oxfords in dark brown with a sleek finish.", image: "images/PHOTO-2025-06-12-12-49-05.jpg" },
  { id: 3, name: "Black High‑Top Formal Boots", description: "Black leather ankle boots with formal lace-up styling.", image: "images/PHOTO-2025-06-12-12-50-34.jpg" },
  { id: 4, name: "Urban Brown Derby", description: "Dark brown leather derby shoes with smooth finish.", image: "images/PHOTO-2025-06-12-12-50-51.jpg" },
  { id: 5, name: "Brown Heeled Boots", description: "Mid-ankle brown boots with slight heel, suitable for evening outings.", image: "images/PHOTO-2025-06-12-12-51-03.jpg" },
  { id: 6, name: "Tan Cap-Toe Derbies", description: "Glossy tan derbies with a cap-toe design and classic lace-up style.", image: "images/PHOTO-2025-06-12-12-51-18.jpg" },
  { id: 7, name: "Brown Block Heel Boots", description: "High-ankle brown boots with block heels, zip-up and stylish.", image: "images/PHOTO-2025-06-12-12-51-34.jpg" },
  { id: 8, name: "Black Slip-On Formals", description: "Minimalist black formal slip-ons with stitched detail.", image: "images/PHOTO-2025-06-12-12-51-48.jpg" },
  { id: 9, name: "Chestnut Brown Lace-Ups", description: "Polished chestnut brown leather lace-ups ideal for office wear.", image: "images/PHOTO-2025-06-12-12-52-04.jpg" },
  { id: 10, name: "White Leather Formals", description: "Polished white slip-ons made for smart-casual summer outfits.", image: "images/PHOTO-2025-06-12-12-52-18.jpg" },
  { id: 11, name: "Black Combat Boots", description: "Sturdy black boots with rugged sole, suited for tough wear.", image: "images/PHOTO-2025-06-12-12-52-32.jpg" },
  { id: 12, name: "Black Brogue Derbies", description: "Black lace-up shoes with decorative brogue perforations.", image: "images/PHOTO-2025-06-12-12-52-52.jpg" },
  { id: 13, name: "Brown Formal Slip-Ons", description: "Shiny brown slip-on shoes with elegant curves for dressy looks.", image: "images/PHOTO-2025-06-12-12-53-08.jpg" },
  { id: 14, name: "Brown Brogue Lace-Ups", description: "Espresso-toned lace-up shoes with detailed brogue design.", image: "images/PHOTO-2025-06-12-12-53-22.jpg" },
  { id: 15, name: "Black Formal Brogue Boots", description: "Durable black shoes with toe perforations, suitable for office wear.", image: "images/PHOTO-2025-06-12-12-53-37.jpg" },
  { id: 16, name: "Brown Dress Slip-Ons", description: "Brown leather slip-ons with a gentle heel, ideal for summer formals.", image: "images/PHOTO-2025-06-12-12-53-51.jpg" },
  { id: 17, name: "Tan Monk Strap Loafers", description: "Tan loafers with decorative metal buckle, tailored for weddings.", image: "images/PHOTO-2025-06-12-12-54-04.jpg" },
  { id: 18, name: "Glossy Brown Formals", description: "Smooth leather derbies with classic styling for formal occasions.", image: "images/PHOTO-2025-06-12-12-54-20.jpg" },
  { id: 19, name: "Brown Trail Shoes", description: "Sturdy lace-up shoes designed for walking and trails.", image: "images/PHOTO-2025-06-12-12-54-38.jpg" },
  { id: 20, name: "Matte Black Lace-Ups", description: "Simple black lace-up shoes for work or casual formals.", image: "images/PHOTO-2025-06-12-12-54-51.jpg" },
  { id: 21, name: "Plain Grey Loafers", description: "Grey slip-on loafers with a soft build for daily wear.", image: "images/PHOTO-2025-06-12-12-55-04.jpg" },
  { id: 22, name: "Chestnut Brogue Shoes", description: "Chestnut brown shoes with classic brogue punch detailing.", image: "images/PHOTO-2025-06-12-12-55-21.jpg" },
  { id: 23, name: "White Slip-On Loafers", description: "Clean white loafers with minimalist styling.", image: "images/PHOTO-2025-06-12-12-55-36.jpg" },
  { id: 24, name: "Light Brown Loafers", description: "Classic casual brown slip-on loafers with rounded toe.", image: "images/PHOTO-2025-06-12-12-55-51.jpg" },
  { id: 25, name: "Black Strap Loafers", description: "Formal loafers in black with buckle and stitched finish.", image: "images/PHOTO-2025-06-12-12-56-05.jpg" },
  { id: 26, name: "Textured Black Loafers", description: "Black loafers with subtle grain and buckle detail.", image: "images/PHOTO-2025-06-12-12-56-20.jpg" },
  { id: 27, name: "Dark Burgundy Loafers", description: "Dark red-brown slip-on loafers with plain vamp.", image: "images/PHOTO-2025-06-12-12-56-35.jpg" },
  { id: 28, name: "Tan Croc-Pattern Shoes", description: "Light tan oxfords with a croc-texture finish and lace-up design.", image: "images/PHOTO-2025-06-12-12-56-50.jpg" },
  { id: 29, name: "Black Wingtip Brogues", description: "Detailed party shoes with perforated wingtip pattern.", image: "images/PHOTO-2025-06-12-12-57-04.jpg" },
  { id: 30, name: "Dark Maroon Plain-Toe Shoes", description: "Smooth plain-toe oxford-style shoes in a gradient maroon tone.", image: "images/PHOTO-2025-06-12-12-57-18.jpg" },
  { id: 31, name: "Burnished Party Brogues", description: "Brown-black gradient brogues with decorative holes.", image: "images/PHOTO-2025-06-12-12-57-34.jpg" },
  { id: 32, name: "Brown Buckled Derbies", description: "Leather formal shoes with a buckle and stitched detailing.", image: "images/PHOTO-2025-06-12-12-57-47.jpg" },
  { id: 33, name: "Dark Red Strap Shoes", description: "Lustrous red-toned formals with double buckle closure.", image: "images/PHOTO-2025-06-12-12-57-59.jpg" },
  { id: 34, name: "Sharp Black Monk Shoes", description: "Sleek black monk straps with subtle shine for formal events.", image: "images/PHOTO-2025-06-12-12-58-14.jpg" },
  { id: 35, name: "Two-Tone Woven Shoes", description: "Brown woven and smooth leather hybrid formal shoes.", image: "images/PHOTO-2025-06-12-12-58-27.jpg" },
  { id: 36, name: "Red Formal Slip-Ons", description: "Breathable red-brown formal slip-ons for summer.", image: "images/PHOTO-2025-06-12-12-58-40.jpg" },
  { id: 37, name: "Navy Slip-On Loafers", description: "Minimalist blue slip-ons with flexible rubber sole.", image: "images/PHOTO-2025-06-12-12-58-53.jpg" },
  { id: 38, name: "Black Penny Loafers", description: "Classic black slip-ons with a low heel and side seam.", image: "images/PHOTO-2025-06-12-12-59-08.jpg" },
  { id: 39, name: "Navy Blue Daily Loafers", description: "Soft navy loafers with plain finish for daily use.", image: "images/PHOTO-2025-06-12-12-59-20.jpg" },
  { id: 40, name: "White Office Derbies", description: "White lace-up shoes designed for formal office looks.", image: "images/PHOTO-2025-06-12-12-59-34.jpg" },
  { id: 41, name: "Red-Brown Casual Lace-Ups", description: "Comfortable lace-up formals in reddish-brown tone.", image: "images/PHOTO-2025-06-12-12-59-47.jpg" },
  { id: 42, name: "Formal Black Sandals", description: "Closed-toe black sandals with red-brown outer layer.", image: "images/PHOTO-2025-06-12-13-00-13.jpg" },
  { id: 43, name: "Daily Velcro Sandals", description: "Comfortable formal sandals with Velcro closure and stitched cutouts.", image: "images/PHOTO-2025-06-12-13-00-28.jpg" }
];


// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
  setupSmoothScrolling();
});

// Load Products Function
function loadProducts() {
  const productGrid = document.getElementById('productGrid');

  products.forEach(product => {
    const productCard = createProductCard(product);
    productGrid.appendChild(productCard);
  });
}

// Create Product Card Function
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <button class="enquire-btn" onclick="enquireOnWhatsApp('${product.name}')">
        Enquire on WhatsApp
      </button>
    </div>
  `;

  return card;
}

// WhatsApp Enquiry Function
function enquireOnWhatsApp(productName) {
  const message = `Hi! I'm interested in the ${productName}. Could you please provide more details about availability and sizing?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile menu toggle (optional)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('mobile-active');
}
