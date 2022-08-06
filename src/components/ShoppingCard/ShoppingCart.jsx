import React, { useState } from "react";
import Basket from "./components/ShoppingCart/Basket";
import Header from "./components/ShoppingCart/Header";
import Main from "./components/ShoppingCard/Main";
import "./components/ShoppingCard/Shopping.css"
import data from "./data"
const ShoppingCart = () => {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty : exist.qty + 1}: x))
    } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
    }
}

    return (
        <div className="Container">
            <Header />
            <div className="row col-2">
                <Main onAdd={onAdd} products = {products} />
                <Basket onAdd={onAdd} cartItems = {cartItems} />
            </div>
        </div>
    )
};

export default ShoppingCart;