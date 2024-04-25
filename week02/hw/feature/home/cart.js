import { SHOPPING_LIST } from "./shoppingList.js";

function addProductAlert() {
  const productCards = document.querySelectorAll(".product_card");

  productCards.forEach((productCard) => {
    productCard.addEventListener("click", function (event) {
      const response = confirm("장바구니에 담을까요?");
      if (response) {
        alert("장바구니에 담겼습니다.");

        const clickedImage = event.currentTarget.querySelector(".product_img");
        const productImg = clickedImage.src;
        const productName =
          productCard.querySelector("li:nth-child(3)").textContent;
        const productPrice =
          productCard.querySelector("li:nth-child(4)").textContent;

        const clickedProduct = SHOPPING_LIST.find(
          (product) => product.name === productName
        );
        const productCategory = clickedProduct
          ? clickedProduct.category
          : "카테고리 정보 없음";

        // 로컬 스토리지에 저장

        const cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];

        const selectedMenu = {
          img: productImg,
          name: productName,
          price: productPrice,
          category: productCategory,
        };

        cartItems.push(selectedMenu);
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
        console.log(localStorage);
      } else {
        alert("취소됐습니다.");
      }
    });
  });

  // 카테고리 필터링 이벤트 리스너 등록
  const navLists = document.querySelectorAll(".menu_nav_li");

  navLists.forEach((navList) => {
    navList.addEventListener("click", function (event) {
      const clickedCategory = event.target.textContent.toLowerCase();
      const filteredProducts = SHOPPING_LIST.filter(
        (product) => product.category.toLowerCase() === clickedCategory
      );
      addProductAlert(filteredProducts);
    });
  });
}

const navCart = document.querySelector(".goCart");
navCart.addEventListener("click", () => {
  window.location.href = "../pages/cart.html";
});

window.addEventListener("DOMContentLoaded", function () {
  addProductAlert();
});
