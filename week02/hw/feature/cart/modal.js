const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".buy_button");
const closeModalButton = document.querySelector(".modal_close_button");
const purchaseButton = document.querySelector(".modal_buy_button");

openModalButton.addEventListener("click", function () {
  showModal();
});

closeModalButton.addEventListener("click", hideModal);
purchaseButton.addEventListener("click", purchaseItem);

function showModal() {
  modal.classList.remove("hidden");
  let storedDataObj = JSON.parse(localStorage.getItem("cartItem"));
  let checkedRowIndices = getCheckedRowIndices();
  let checkedRowData = checkedRowIndices.map((index) => storedDataObj[index]);
  showProducts(checkedRowData);
}

function hideModal() {
  modal.classList.add("hidden");
  window.location.reload();
}

function purchaseItem() {
  alert("구매 완료");
  let checkedRowIndices = getCheckedRowIndices();

  let storedDataObj = JSON.parse(localStorage.getItem("cartItem"));
  checkedRowIndices.forEach((index) => {
    delete storedDataObj[index];
  });

  let filteredData = storedDataObj.filter(Boolean);

  localStorage.setItem("cartItem", JSON.stringify(filteredData));

  hideModal();
}

function getCheckedRowIndices() {
  let checkedRowIndices = [];
  document
    .querySelectorAll('input[type="checkbox"]:not(#selectAllCheckbox)')
    .forEach((checkbox, index) => {
      if (checkbox.checked) {
        let rowIndex = checkbox.closest("tr").rowIndex - 1;
        checkedRowIndices.push(rowIndex);
      }
    });
  return checkedRowIndices;
}

function showItemList(imageUrl, name, value) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("modal_product");

  const itemImg = document.createElement("img");
  itemImg.classList.add("modal_img");
  itemImg.src = imageUrl;
  itemImg.alt = value;

  const itemName = document.createElement("p");
  itemName.textContent = name;

  const itemPrice = document.createElement("p");
  if (value !== undefined) {
    itemPrice.textContent = value.toLocaleString();
  } else {
    itemPrice.textContent = "";
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
  }
  return itemContainer;
}

function showProducts(products) {
  const modalContent = document.querySelector(".modal");

  let totalPrice = 0;

  products.forEach((product) => {
    const { imageUrl, name, value } = product;

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("modal_product");

    const itemImg = document.createElement("img");
    itemImg.classList.add("modal_img");
    itemImg.src = imageUrl;
    itemImg.alt = name;

    const itemName = document.createElement("p");
    itemName.textContent = name;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = value.toLocaleString();

    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);

    modalContent.appendChild(itemContainer);
    totalPrice += value;
  });

  const totalPriceElement = document.createElement("div");
  totalPriceElement.classList.add("total_price");
  totalPriceElement.textContent =
    "총 가격: " + totalPrice.toLocaleString() + "원";
  modalContent.appendChild(totalPriceElement);
}
