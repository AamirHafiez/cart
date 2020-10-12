import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    render() {
        return(
            <React.Fragment>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </React.Fragment>
        );
    }
}

export default Cart;