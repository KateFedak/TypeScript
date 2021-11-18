var form = document.getElementById("formId");
(document.getElementById("addProduct")as HTMLFormElement).addEventListener("click", 
function () {
    let nameProduct = (document.getElementById("pname")as HTMLFormElement).value;
    let categoryProduct = (document.getElementById("pdescription")as HTMLFormElement).value;
    let priceProduct = (document.getElementById("pprice")as HTMLFormElement).value;
    let imgProduct = (document.getElementById("picture")as HTMLFormElement).value;
    localStorage.setItem(localStorage.length + "1",
      JSON.stringify([
        {
          name: nameProduct,
          img: imgProduct,
          category: categoryProduct,
          price: priceProduct,
        },
      ])
    );
  });