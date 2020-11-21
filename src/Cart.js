import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const product = props.product;
    return(
            <React.Fragment>
            {product.map((i) => {
                return <CartItem 
                    product={i} 
                    increaseQty={props.handleIncreaseQuantity} 
                    decreaseQty={props.handleDecreaseQuantity}
                    deleteProd={props.handleDeleteProduct} 
                    key={i.id}
                />
            })}
        </React.Fragment>
    );
}

export default Cart;