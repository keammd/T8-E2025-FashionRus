"use strict";

const productListContainer = document.querySelector("main");

getData("https://kea-alt-del.dk/t7/api/products");

function getData(url) {
  console.log("getData ....");
  fetch(url).then((res) => res.json().then((data) => makeList(data)));
}
function makeList(data) {
  console.log("DATA", data);
  productListContainer.innerHTML = "<h2>Apparel</h2>";
  data.forEach((product) => {
    productListContainer.innerHTML += `<article class="smallProduct ${product.discount === null ? "" : "onSale discounted"} ${product.soldout ? "soldOut" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.articletype} | ${product.brandname}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span>${product.price - (product.price * product.discount) / 100}</span>,-</p>
          <p><span>${product.discount}</span>%</p>
        </div>
        <a href="product.html">Read More</a>
      </article>`;
  });
}
