

export function InsertProduct() {
  localStorage.setItem(
    "1",
    JSON.stringify([
      {
        name: "IPhone 8",
        img: "iphone8.png",
        category: "phone",
        price: 1200,
      },
    ])
  );

  localStorage.setItem(
    "2",
    JSON.stringify([
      {
        name: "IPhone 10",
        img: "iphone10.jpg",
        category: "phone",
        price: 1350,
      },
    ])
  );
  localStorage.setItem(
    "3",
    JSON.stringify([
      {
        name: "MacBook Pro",
        img: "laptop.png",
        category: "laptop",
        price: 22800,
      },
    ])
  );
  localStorage.setItem(
    "4",
    JSON.stringify([
      {
        name: "MacBook Air",
        img: "laptop.png",
        category: "laptop",
        price: 18500,
      },
    ])
  );
  localStorage.setItem(
    "5",
    JSON.stringify([
      {
        name: "IPhone 7",
        img: "iphone7.png",
        category: "phone",
        price: 750,
      },
    ])
  );
}