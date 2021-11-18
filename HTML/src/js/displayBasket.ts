import {RemoveFromBasket}  from  './removeFromBasket';
import {Item} from './InterfaceItems';

export function doShowBasket() {
  let keys = Object.keys(sessionStorage);
  keys.forEach((it) => {
    if (it != "IsThisFirstTime_Log_From_LiveServer") {
      let items = JSON.parse(sessionStorage.getItem(it) as any);
      items.forEach((item:Item) => {
        let element = document.createElement("div");
        element.classList.add("item-Basket");
        element.setAttribute("id", it);
        let deleteSpan = document.createElement("span");
        deleteSpan.classList.add("delete-btn");
        deleteSpan.setAttribute("id", it);
        deleteSpan.addEventListener("click", (event) => {
          RemoveFromBasket(it);
        });
        let img = document.createElement("img");
        img.style.height = "200px";
        img.style.width = "200px";
        img.src = "./img/" + item.img;
        let name = document.createElement("h3");
        name.textContent = item.name;
        let category = document.createElement("h4");
        category.textContent = item.category;
        let divInfo = document.createElement("div");
        divInfo.appendChild(name);
        divInfo.appendChild(category);
        let price = document.createElement("h5");
        price.textContent = item.price.toString();
        let divPrice = document.createElement("div");
        divPrice.classList.add("total-price");
        divPrice.appendChild(price);
        element.appendChild(deleteSpan);
        element.appendChild(img);
        element.appendChild(divInfo);
        element.appendChild(divPrice);
        (document.querySelector(".shopping-cart") as HTMLFormElement).appendChild(element);
      });
    }
  });
}