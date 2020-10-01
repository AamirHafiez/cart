import React from 'react';

class CartItem extends React.Component{

    // * ------- default state using the constructor --------
    constructor() {
        super();
        this.state = {
            title: 'Smart Phone',
            price: '999.99',
            qty: 1,
            img: ''
        }
        // * Method 1.1: either use bind to bind 'this' to a function and simply create a function
        // * example below 
        // this.increaseQuantity = this.increaseQuantity.bind(this);

        // *Method 1.2 or simply use arrow function to automatically bind 'this' to a function 
    }

    // * ------- TO INCREASE QUANTITY OF THE ITEM ------------
    // * Method 1.1: when using normal function and binding this in constructor
    // increaseQuantity()  {
    //     this.state.qty += 1;
    //     console.log(this.state.qty);
    // }

    // * Method 1.2: when using arrow function to bind 'this'
    increaseQuantity = () => {
        // * below code changes the quantity but it is not going to re-render it on the webpage
        // * hence we will use inbuilt functions provided by React.component parent class
        // this.state.qty += 1;

        // * Method - 1 -----------------> if we just have to change value
        // * the below function will change the state value and then re render it on the page
        // * this setState() method will do shallow merging, i.e, only that value will be changed that we want to change, example here qty
        // this.setState({
        //     qty: this.state.qty + 1
        // });


        // * Method - 2 -----------------> if we require previous state
        // * using a callback arrow function inside of setState() method
        // * here in prevState the previous state will be saved  
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });

        // console.log(this.state.qty);
    }

    // to decrese the quantity of an item
    decreaseQuantity = () => {
        if(this.state.qty <= 0){
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        });
    }

    render(){
        const {title, price, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 'xx-large'}}>{title}</div>
                    <div style={{color: 'grey'}}>Rs {price}</div>
                    <div style={{color: 'grey'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* Method 1.1: Here we have used function at 'onClick' but to use 'this' here we need to bind 'this' to the function first */}
                        <img title="Add more" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg" alt="increase" className="action-icons" onClick={this.increaseQuantity} />
                        <img title="Delete more" src="https://www.flaticon.com/svg/static/icons/svg/753/753340.svg" alt="decrease" className="action-icons" onClick={this.decreaseQuantity} />
                        <img title="Remove from cart" src="https://www.flaticon.com/svg/static/icons/svg/3159/3159673.svg" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>
        );
    }
}

// * this is to set the css styles after creating this object we will use it in our jsx in style attribute
const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 20,
        backgroundColor: 'red'
    }
}

export default CartItem;