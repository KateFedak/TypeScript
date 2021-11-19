import { AddToBucket } from './addToBusket'
export interface Element {
  id: number;
  name: string;
  img: string;
  category: string;
  price: number;
}
export interface Items {
  members: Element[];
}
export const Product = (props: Element) => {
  return (
    <div className="item">
      <img src={props.img} width="200px" height="200px" alt="" />
      <h3>{props.name}</h3>
      <h4>{props.category}</h4>
      <h5>{props.price}</h5>
      <button id={props.id.toString()} onClick={() => AddToBucket(props)} > Add</button>
    </div>

  );
};
export const ProductInBasket = (props: Element) => {
  return (

    <div className="item-Basket">
      <img src={props.img} width="200px" height="200px" alt="" />
      <div>
        <h3>{props.name}</h3>
        <h4>{props.category}</h4>
      </div>
      <div className="total-price">
        <h5>{props.price}</h5>
      </div>
    </div>

  );
};