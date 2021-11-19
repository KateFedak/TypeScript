import { Items, Product, ProductInBasket } from "./InterfaceItems";

export const Item = (props: Items) => {
  localStorage.setItem("Products", JSON.stringify(props.members))
  return (
    <div className="container-items">
      {props.members.map((member) => (
        <Product id={member.id} name={member.name} img={member.img} category={member.category} price={member.price} />
      ))}
    </div>
  );
};

export const ItemViewInBasket = (props: Items) => {
  return (
    <div className="shopping-cart">
      {props.members.map((member) => (
        <ProductInBasket id={member.id} name={member.name} img={member.img} category={member.category} price={member.price} />
      ))}
    </div>
  );
};
