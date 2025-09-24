"use strict";

const productListContainer = document.querySelector("main");
// loadJSON("https://kea-alt-del.dk/t7/api/products?articletype=Backpacks");
loadJSON("https://kea-alt-del.dk/t7/api/products");
async function loadJSON(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  makeList(jsonData);
}
function makeList(data) {
  console.log("DATA", data);
  productListContainer.innerHTML = " <h2>Apparel</h2>";
  data.forEach((product) => {
    productListContainer.innerHTML += `<article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="product image" />
        <h3>Big Cat Backpack Black</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price">DKK <span>1595</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span></span>,-</p>
          <p><span></span>%</p>
        </div>
        <a href="product.html">Read More</a>
      </article>`;
  });
}
