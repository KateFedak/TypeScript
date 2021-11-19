export function AddToBucket(id: string) {
  (document.getElementById(id) as HTMLFormElement).textContent = "ADDED";
  let product = localStorage.getItem(id) as any;
  sessionStorage.setItem(id, product);
  (document.getElementById("countOfProducts") as HTMLFormElement).textContent =
    sessionStorage.length.toString();
}
