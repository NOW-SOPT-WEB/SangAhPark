const storedData = localStorage.getItem("cartItem");

if (storedData) {
  const cartItemsArray = JSON.parse(storedData);
  showProducts(cartItemsArray);
} else {
  console.log("로컬스토리지에 데이터가 없습니다.");
}

function makeTable(id, img, name, price, category) {
  const itemTable = document.querySelector(".item_table");

  const itemTr = document.createElement("tr");
  itemTr.classList.add("item_tr");

  const itemCheckTd = document.createElement("td");
  const itemCheck = document.createElement("input");
  itemCheck.type = "checkbox";
  itemCheck.dataset.id = id;
  itemCheckTd.appendChild(itemCheck);

  const itemImgTd = document.createElement("td");
  const itemImg = document.createElement("img");
  itemImg.classList.add("item_img");
  itemImg.src = img;
  itemImgTd.appendChild(itemImg);

  const itemNameTd = document.createElement("td");
  itemNameTd.textContent = name;

  const itemPriceTd = document.createElement("td");
  itemPriceTd.textContent = price.toLocaleString() + "원";

  const itemCategoryTd = document.createElement("td");
  itemCategoryTd.textContent = category;

  const itemButtonTd = document.createElement("td");
  const itemButton = document.createElement("button");
  itemButton.classList.add("remove_button");
  itemButton.textContent = "삭제";
  itemButton.dataset.index = id;
  itemButtonTd.appendChild(itemButton);

  itemTr.appendChild(itemCheckTd);
  itemTr.appendChild(itemImgTd);
  itemTr.appendChild(itemNameTd);
  itemTr.appendChild(itemPriceTd);
  itemTr.appendChild(itemCategoryTd);
  itemTr.appendChild(itemButtonTd);

  itemTable.appendChild(itemTr);

  return itemTr;
}

function showProducts(products) {
  const resultContainer = document.querySelector(".item_section .item_table");

  products.forEach((product) => {
    const { id, imageUrl, name, value, category } = product;
    makeTable(id, imageUrl, name, value, category);
  });
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove_button")) {
    const productId = event.target.dataset.index;
    removeProduct(productId);
    event.target.parentElement.parentElement.remove();
  }
});

function removeProduct(productId) {
  const storedData = localStorage.getItem("cartItem");
  if (storedData) {
    const cartItemsArray = JSON.parse(storedData);
    const updatedCartItems = cartItemsArray.filter(
      (item) => item.id !== parseInt(productId)
    );
    localStorage.setItem("cartItem", JSON.stringify(updatedCartItems));
  }
}

const homeButton = document.getElementsByName("home_button");

homeButton.forEach((element) =>
  element.addEventListener("click", () => {
    window.location.href = "../pages/home.html";
  })
);
