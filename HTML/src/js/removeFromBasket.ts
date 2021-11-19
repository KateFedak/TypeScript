export function RemoveFromBasket(id: string) {
  sessionStorage.removeItem(id);
  (document.getElementById(id) as HTMLFormElement).setAttribute(
    "style",
    "display:none"
  );
  (document.getElementById("countOfProducts") as HTMLFormElement).textContent =
    sessionStorage.length.toString();
}
