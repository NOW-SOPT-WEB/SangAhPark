const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".buy_button");
const closeModalButton = document.querySelector(".modal_close_button");
const purchaseButton = document.querySelector(".modal_buy_button");

openModalButton.addEventListener("click", showModal);
closeModalButton.addEventListener("click", hideModal);
purchaseButton.addEventListener("click", purchaseItem);

let storedDataObj = JSON.parse(localStorage.getItem("cartItem"));

function showModal() {
  modal.classList.remove("hidden");
  showProducts(storedDataObj);
  showTotalPrice(storedDataObj);
}

function hideModal() {
  modal.classList.add("hidden");
  window.location.reload();
}

function purchaseItem() {
  alert("구매 완료");
  hideModal();
}

function showItemList(img, name, price) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("modal_product");

  const itemImg = document.createElement("img");
  itemImg.classList.add("modal_img");
  itemImg.src = img;

  const itemName = document.createElement("p");
  itemName.textContent = name;

  const itemPrice = document.createElement("p");
  itemPrice.textContent = price.toLocaleString();

  itemContainer.appendChild(itemImg);
  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemPrice);

  return itemContainer;
}

// 상품 목록
function showProducts(products) {
  const resultContainer = document.querySelector(".modal");

  products.forEach((product) => {
    const { img, name, price, category } = product;
    const productCard = showItemList(img, name, price);
    resultContainer.appendChild(productCard);
  });
}

// 총 가격을 표시
function showTotalPrice(products) {
  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += parseInt(product.price.replace(/[^0-9]/g, ""), 10);
  });

  console.log(totalPrice);

  const totalPriceElement = document.createElement("div");
  totalPriceElement.classList.add("total_price");
  totalPriceElement.textContent =
    "총 가격: " + totalPrice.toLocaleString() + "원";

  const modalContent = document.querySelector(".modal");
  modalContent.appendChild(totalPriceElement);
}
