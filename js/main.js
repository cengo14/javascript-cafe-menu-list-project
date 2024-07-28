import { buttonsData, menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

//! fonsiyonlar

const searchCategory = (e) => {
  const category = e.target.dataset.category;
  const filteredMenu = menu.filter((item) => item.category === category);
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filteredMenu);
  }
  renderButtons(category);
};
const renderButtons = (active) => {
  elements.buttonsArea.innerHTML = "";
  buttonsData.forEach((btn) => {
    const btnElement = document.createElement("button");
    btnElement.className = "btn btn-outline-dark filter-btn";
    btnElement.textContent = btn.text;
    btnElement.dataset.category = btn.value;
    if (btn.value === active) {
      btnElement.classList.add("active");
    }
    elements.buttonsArea.appendChild(btnElement);
  });
};
const renderMenuItems = (menuItems) => {
  let menuHtml = menuItems.map(
    (
      item
    ) => `<a id="card" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2 shadow"
            href="./productDetail.html?id=${item.id}&category=${
      item.category
    }&price=${calculatePrice(item.price)}">
            <img src="${item.img}" class="rounded shadow" alt="food">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h5>${item.title}</h5>
                    <p class="text-success">${calculatePrice(item.price)}₺</p>
                </div>
                <p class="lead">${item.desc}</p>
            </div>
        </a>`
  );
  menuHtml = menuHtml.join("");

  elements.menuArea.innerHTML = menuHtml;
};

//! olay izleyicileri
// document.addEventListener("DOMContentLoaded", renderMenuItems(menu));
// document.addEventListener("DOMContentLoaded", renderButtons());

document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons("all");
});
elements.buttonsArea.addEventListener("click", searchCategory);
