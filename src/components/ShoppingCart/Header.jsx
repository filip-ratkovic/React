import React from "react";

const Header = (props) => {
    return  ( 
         <header className="row block center">
    <div>
        <a href="#/">
            <h1>Small Shopping card</h1>
        </a>
    </div>
    <div>
        <a href="#/cart">Cart</a>
        <a href="#/singin">Sing in</a>
    </div>
</header>)
}

export default Header;