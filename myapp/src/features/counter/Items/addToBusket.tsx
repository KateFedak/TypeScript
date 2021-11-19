import { Element } from "./InterfaceItems";
export function AddToBucket(element: Element) {
    //(document.getElementById(id) as HTMLFormElement).textContent = "ADDED";

    sessionStorage.setItem("Products", JSON.stringify(element));
    // (document.getElementById("countOfProducts") as HTMLFormElement).textContent =
    //  sessionStorage.length.toString();
}