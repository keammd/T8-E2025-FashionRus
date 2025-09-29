console.log("Category loaded...");
const categoryContainer = document.querySelector("#categoryContainer");
categoryContainer.innerHTML = "<ul>";

getData("https://kea-alt-del.dk/t7/api/categories");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showCategories(data)));
}

function showCategories(categories) {
  console.log("showCategories2 loaded...", categories);

  categories.forEach((category) => {
    console.log("Loopet", category);

    categoryContainer.innerHTML += `<li>
     <a href="productlist.html?category=${category.category}"> ${category.category}</a>
    </li>`;
  });
}
categoryContainer.innerHTML += `</ul>`;
