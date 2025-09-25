console.log("loaded ....");

const id = 1538;
// const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;

console.log("min url ", productUrl);

function getData() {
  console.log("getData ....");
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("show ....", data);
  document.querySelector(
    "#productContainer"
  ).innerHTML = `<h1 class= "vigtig"> ${data.productdisplayname}</h1>
  <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="">
    <p>her kommer mere</p>`;
}

getData();
