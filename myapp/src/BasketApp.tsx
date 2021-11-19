import React from 'react';
import './App.css';
import { Product } from './features/counter/Items/InterfaceItems';
import { ItemViewInBasket } from './features/counter/Items/Item';
function AppBasket() {
    return (
        <div className="AppBasket">
            <div className="side-nav">
                <a href="index.html"> All</a>
            </div>
            <ItemViewInBasket {...JSON.parse(sessionStorage.getItem("Product"))} />
        </div>
    );
}

export default AppBasket;