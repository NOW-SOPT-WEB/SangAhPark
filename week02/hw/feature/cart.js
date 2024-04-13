function addProductAlert() {
  const productCard = document.querySelector(".product_card");

  productCard.addEventListener("click", function () {
    const response = confirm("장바구니에 담을까요?");

    if (response) {
      alert("장바구니에 담겼습니다.");
    } else {
      alert("취소됐습니다.");
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  addProductAlert();
});
