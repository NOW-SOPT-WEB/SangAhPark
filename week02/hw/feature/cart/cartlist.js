// localstorage 값 불러오기
const storedData = localStorage.getItem("cartItem");

if (storedData) {
  const cartItemsArray = JSON.parse(storedData);
  showProducts(cartItemsArray);
  // cartItemsArray.forEach((data) => {
  //     console.log(data);
  // });
} else {
  console.log("로컬스토리지에 데이터가 없습니다.");
}

// 테이블 생성
function makeTable(id, img, name, price, category) {
  const itemTable = document.querySelector(".item_table");

  const itemTr = document.createElement("tr");
  itemTr.classList.add("item_tr");

  const itemCheckTd = document.createElement("td");
  const itemCheck = document.createElement("input");
  itemCheck.type = "checkbox";
  itemCheck.dataset = id;
  itemCheck.dataindex = id;
  itemCheckTd.appendChild(itemCheck);

  const itemImgTd = document.createElement("td");
  const itemImg = document.createElement("img");
  itemImg.classList.add("item_img");
  itemImg.src = img;
  itemImgTd.appendChild(itemImg);

  const itemName = document.createElement("td");
  itemName.textContent = name;

  const itemPrice = document.createElement("td");
  itemPrice.textContent = price + "원";

  const itemCategory = document.createElement("td");
  itemCategory.textContent = category;

  const itemButtonTd = document.createElement("td");
  const itemButton = document.createElement("button");
  itemButton.classList.add("remove_button");
  itemButton.textContent = "삭제";
  itemButton.dataset.index = id;
  itemButtonTd.appendChild(itemButton);

  itemTr.appendChild(itemCheckTd);
  itemTr.appendChild(itemImgTd);
  itemTr.appendChild(itemName);
  itemTr.appendChild(itemPrice);
  itemTr.appendChild(itemCategory);
  itemTr.appendChild(itemButtonTd);

  itemTable.appendChild(itemTr);

  return itemTable;
}

// 상품 목록을 보여주는 함수
function showProducts(products) {
  const resultContainer = document.querySelector(".item_section .item_table");

  products.forEach((product) => {
    const { id, img, name, price, category } = product;
    const productCard = makeTable(id, img, name, price, category);
    if (!resultContainer.contains(productCard)) {
      resultContainer.appendChild(productCard);
    }
  });
}
