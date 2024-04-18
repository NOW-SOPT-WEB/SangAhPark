window.addEventListener("DOMContentLoaded", function () {
  // 삭제 버튼 이벤트 처리
  document.querySelectorAll(".remove_button").forEach((button, index) => {
    button.addEventListener("click", function () {
      let dataIndex = parseInt(this.dataset.index);

      // 로컬 스토리지에서 데이터 삭제
      let data = JSON.parse(localStorage.getItem("cartItem")) || [];
      data.splice(dataIndex, 1);
      localStorage.setItem("cartItem", JSON.stringify(data));

      // 테이블 행 삭제
      let row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
  });
});
