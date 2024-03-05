const how_item = document.querySelectorAll(".how-item");

how_item.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
