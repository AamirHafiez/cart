import React from 'react';

class CartItem extends React.Component{

    constructor() {
        super();
        this.state = {
            title: 'Smart Phone',
            price: '999.99',
            qty: 1,
            img: ''
        }
        // Method 1.1: either use bind to bind 'this' to a function and simply create a function
        // example below 
        // this.increaseQuantity = this.increaseQuantity.bind(this);

        // Method 1.2 or simply use arrow function to automatically bind 'this' to a function 
    }

    // Method 1.1: when using normal function and binding this in constructor
    // increaseQuantity()  {
    //     this.state.qty += 1;
    //     console.log(this.state.qty);
    // }

    // Method 1.2: when using arrow function to bind 'this'
    increaseQuantity = () => {
        this.state.qty += 1;
        console.log(this.state.qty);
    }

    render(){
        const {title, price, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 'xx-large'}}>{title}</div>
                    <div style={{color: 'grey'}}>Rs {price}</div>
                    <div style={{color: 'grey'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* Method 1.1: Here we have used function at 'onClick' but to use 'this' here we need to bind 'this' to the function first */}
                        <img title="Add more" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg" alt="increase" className="action-icons" onClick={this.increaseQuantity} />
                        <img title="Delete more" src="https://www.flaticon.com/svg/static/icons/svg/753/753340.svg" alt="decrease" className="action-icons" />
                        <img title="Remove from cart" src="https://www.flaticon.com/svg/static/icons/svg/3159/3159673.svg" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 20,
        backgroundColor: 'red'
    }
}

export default CartItem;