const selectAllCheckbox = document.getElementById("selectAllCheckbox");

selectAllCheckbox.addEventListener("change", function () {
  const isChecked = this.checked;
  toggleAllCheckboxes(isChecked);
});

function toggleAllCheckboxes(checked) {
  const allCheckboxes = document.querySelectorAll(
    '.item_table input[type="checkbox"]'
  );
  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}

document
  .querySelectorAll('input[type="checkbox"]:not(#selectAllCheckbox)')
  .forEach((checkbox, index) => {
    checkbox.addEventListener("change", function () {
      let rowIndex = checkbox.closest("tr").rowIndex - 1;
      if (checkbox.checked) {
        console.log("row index:", rowIndex);
      } else {
        console.log("Unchecked");
      }
    });
  });
