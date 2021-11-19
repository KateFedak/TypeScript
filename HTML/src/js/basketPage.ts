import { doShowBasket } from "./displayBasket";
window.onload = function () {
  (document.getElementById("countOfProducts") as HTMLFormElement).textContent =
    sessionStorage.length.toString();
  doShowBasket();
};
