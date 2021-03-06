import React from 'react';

function Navbar(props){
    return (
        <div style={styles.nav}>
          <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/3594/3594363.svg" alt="cart-icon" />
            <span style={styles.cartCount}>{props.count}</span>
          </div>
          <div>
            <span style={styles.totalTitle}><b>Total:</b> Rs. {props.total}/-</span>
          </div>
        </div>
      );
}

const styles = {
    cartIcon: {
      height: 40,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    },
    totalTitle: {
      color: "white",
      fontSize: "1.2rem"
    }
};

export default Navbar;