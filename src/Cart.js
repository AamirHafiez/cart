import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            product: [
                {
                    id: 1,
                    title: 'Laptop',
                    price: 70000,
                    qty: 1,
                    img: 'https://www.flaticon.com/svg/static/icons/svg/742/742201.svg'
                },
                {
                    id: 2,
                    title: 'USB',
                    price: 500,
                    qty: 1,
                    img: 'https://www.flaticon.com/svg/static/icons/svg/3233/3233479.svg'
                },
                {
                    id: 3,
                    title: 'Mobile',
                    price: 23000,
                    qty: 1,
                    img: 'https://www.flaticon.com/svg/static/icons/svg/2097/2097276.svg'
                }
            ]
        }
    }

    handleIncreaseQuantity = (x) => {
        let p = this.state.product;
        let index = p.indexOf(x);
        p[index].qty += 1;

        this.setState({
            product: p
        });
    }

    handleDecreaseQuantity = (x) => {
        let p = this.state.product;
        let index = p.indexOf(x);
        
        if(p[index].qty === 0){
            return;
        }

        p[index].qty -= 1;
        this.setState({
            product: p
        });
    }

    handleDeleteProduct = (x) => {

        // Using Filter Function (if x is an id):-
        // if we had fetched a parameter that is the object id instead of x here(i.e, the whole object)
        // we could have used another function of javascript called as filter.
        // filter works by filtering the array according to the need (condition given in the filter function)
        
        // example (if x would have been an id of an object to be deleted):-
        // let { p } = this.state;
        // let temp = p.filter( (i) => i.id != x ); ----> This would have given us a array in temp without id x
        // this.setState({
            // product: temp
        //});

        // Using splice function (if x is an object):-
        let p = this.state.product;
        let index = p.indexOf(x);

        p.splice(index, 1);

        this.setState({
            product: p
        });
    }

    render() {
        const product = this.state.product;
        return(
              <React.Fragment>
                {product.map((i) => {
                    return <CartItem 
                        product={i} 
                        increaseQty={this.handleIncreaseQuantity} 
                        decreaseQty={this.handleDecreaseQuantity}
                        deleteProd={this.handleDeleteProduct} 
                        key={i.id}
                    />
                })}
            </React.Fragment>
        );
    }
}

export default Cart;