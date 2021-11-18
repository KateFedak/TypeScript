import { Url } from "url";

import {InsertProduct}  from  './InsertItems';
import {AddToBucket}  from  './addToBacket';
import {Item} from './InterfaceItems';

 export function doShowAll(){
  InsertProduct();


  let keys = Object.keys(localStorage);
  let params =new URL(document.location.toString()).searchParams;
  let filter = params.get("filter");
  keys.forEach((it) => {
    let items = JSON.parse(localStorage.getItem(it)as any);
    items
      .filter((item : Item) => !filter || item.category == filter)
      .forEach((item:Item) => {
        let element = document.createElement("div");
        element.classList.add("item");
        let img = document.createElement("img");
        img.style.height = "200px";
        img.style.width = "200px";
        img.src = "./img/" + item.img;
        let name = document.createElement("h3");
        name.textContent = item.name;
        let category = document.createElement("h4");
        category.textContent = item.category;
        let price = document.createElement("h5");
        price.textContent = item.price.toString();
        let button = document.createElement("button");
        button.setAttribute("id", it);
        button.addEventListener("click", event => {
          AddToBucket(it);
        });
        if (sessionStorage[it] == null) {
          button.textContent = "ADD";
        } else {
          button.textContent = "ADDED";
        }
        button.style.height = "20px";
        button.style.width = "70px";
        button.classList.add("add-button");
        element.appendChild(img);
        element.appendChild(name);
        element.appendChild(category);
        element.appendChild(price);
        element.appendChild(button);
        (document.querySelector(".container-items")as HTMLFormElement).appendChild(element);
      });
  });
}