import React from "react";

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    return <aside className="block col-1">
        <h2>Cart items</h2>
        <div>
            <div> {cartItems.length === 0 && <div> Cart is empty</div>}</div>

            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div  className="col-2">
                    <button onClick={() => onAdd(item)} className="add">+</button>
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                     <div  className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                     </div>
                </div>)
            )}

        </div>
    </aside>
}

export default Basket;