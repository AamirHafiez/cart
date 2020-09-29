import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 'xx-large'}}>Phone</div>
                    <div style={{color: 'grey'}}>Rs 999.99</div>
                    <div style={{color: 'grey'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'red'
    }
}

export default CartItem;