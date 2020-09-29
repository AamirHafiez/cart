import React from 'react';

class CartItem extends React.Component{

    constructor() {
        super();
        this.state = {
            title: 'Smart Phone',
            price: '999.99',
            qty: '1',
            img: ''
        }
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
                        <img title="Add more" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg" alt="increase" className="action-icons" />
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