//4 задание
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [name, phone, email].forEach((item) => {
    if (!item.value) {
      hasError = true;
    }
  });

  if (!hasError) {
    [name, phone, email].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за заявку! Мы скоро свяжемся с Вами!");
  } else {
    alert("Чтобы оставить заявку необходимо заполнить все поля!");
  }
};
//1
var accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  var header = item.querySelector(".accordion-header");
  var content = item.querySelector(".accordion-content");
  var arrow = item.querySelector(".accordion-arrow");

  header.addEventListener("click", function () {
    item.classList.toggle("active");
    content.style.display = item.classList.contains("active")
      ? "block"
      : "none";
    arrow.style.transform = item.classList.contains("active")
      ? "rotate(-135deg)"
      : "rotate(45deg)";
  });
});
