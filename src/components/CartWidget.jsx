import React from "react";



const CartWidget = () => {
    
    return (
      <div className="cart-widget">
        
        <FontAwesomeIcon icon="fa-thin fa-cart-shopping" />
        <div className="qty-display">0</div>
      </div>
    );
  };
  
  export default CartWidget;
