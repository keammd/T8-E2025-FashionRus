console.log("HEJ FRA PRODUCT LIST");
const productContainer = document.querySelector(".product_container");
getData("https://kea-alt-del.dk/t7/api/products");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);
    productContainer.innerHTML += `
    <article class="smallProduct   ${product.discount === null ? "" : "onSale"}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
      <h3>${product.productdisplayname}</h3>
      <p class="subtle">Tshirts | Nike</p>
      <p class="price">
        DKK <span>1595</span>,-
      </p>
      <div class="discounted">
        <p>
          Now DKK <span>1010</span>,-
        </p>
        <p>
          <span>30</span>%
        </p>
      </div>
      <a href="product.html">Read More</a>
    </article>`;
  });
}
