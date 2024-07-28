import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

const search = location.search;
const searchParam = new URLSearchParams(search);
const paramId = searchParam.get("id");

const product = menu.find((item) => item.id === Number(paramId));
elements.outlet.innerHTML = `<div class="d-flex justify-content-between align-items-center">
            <a href="index.html"><i class="bi bi-house fs-2"></i></a>
            <div><a class="text-black text-decoration-none" href="index.html">anasayfa</a>/${
              product.category
            }/${product.title.toLowerCase()}</div>
        </div>
        <h1 class="text-center shadow p-2 rounded">${product.title}</h1>
        <div class="d-flex justify-content-center align-items-center">
            <img class="shadow rounded-4" src="${
              product.img
            }" alt="pancake" style="max-width: 480px;">
        </div>
        <div>
            <h3 class="my-5">Ürün Kategorisi: <span class="text-success">${
              product.category
            }</span></h3>
            <h3>Ürün Fiyatı: <span class="text-success">${calculatePrice(
              product.price
            )}₺</span></h3>
        </div>
        <p class="lead fs-3">${product.desc}</p>`;
