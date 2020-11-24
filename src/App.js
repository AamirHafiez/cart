import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/app'

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            product: [],
            loading: true
        }
        // Instead of using firebase.firestore() everywhere we could just use this.db
        // this.db = firebase.firestore();
    }

    componentDidMount() {
        // Reading data from firestore
        firebase // from firebase 
            .firestore() // database called
            .collection('products') // the collection from the database
            // .orderBy('price') // to sort in increasing order
            .where('price', '>=', 25000)
            // we can use multiple where example
            // .where()
            // .where()
            .orderBy('price', 'desc') // to sort in decreasing order
            //.get() // gets the instance of the collection and returns a promise
            //.then((snapshot) => { // promise resolves and the callback has the data from the database
            .onSnapshot( (snapshot)=> { // instead of get and then we use onSnapshot which will listen to any changes in the database, i.e, we don't need to refresh browser if database changes
                let product = snapshot.docs.map((i) => { // docs contains the array of data and map function returns the array
                    let o = i.data(); // here i.data() function gives the actual object containing our fields
                    o['id'] = i.id; // we create another field in our object to store id
                    return o; // and return this object which will be stored as an element in our product array
                });

                // then we set the state with all the objects from firestore
                this.setState({
                    product,
                    loading: false
                });
            });
    }

    addProduct = () => {
        firebase
            .firestore()
            .collection('products')
            .add({ // this is used to add a new product in the collection of the firebase
                title: 'Television',
                price: 35000,
                qty: 1,
                img: 'https://www.flaticon.com/svg/static/icons/svg/420/420424.svg'
            })
            .then((docRef) => { // add function returns promise which needs to be handled
                console.log('Product added to document with reference:', docRef);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    handleIncreaseQuantity = (x) => {
        let p = this.state.product;
        let index = p.indexOf(x);
        // p[index].qty += 1;

        // this.setState({
        //     product: p
        // });

        // here we need to first get the reference of the document we need to update
        // we use doc function to get the reference from the database
        // we need to provide the id of the document in the doc method
        const docRef = firebase.firestore().collection('products').doc(p[index].id);
        docRef.update({ // using reference we can update
            qty: p[index].qty + 1
        })
        .then(() => {
            console.log('Updated Successfully -> increase qty');
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }

    handleDecreaseQuantity = (x) => {
        let p = this.state.product;
        let index = p.indexOf(x);
    
        if(p[index].qty === 0){
            return;
        }

        // p[index].qty -= 1;
        // this.setState({
        //     product: p
        // });

        const docRef = firebase.firestore().collection('products').doc(p[index].id);
        docRef.update({
            qty: p[index].qty - 1
        })
        .then(() => {
            console.log('Updated Successfully -> decrease qty');
        })
        .catch((error) => {
            console.log('Error:', error);
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

        // p.splice(index, 1);

        // this.setState({
        //     product: p
        // });

        const docRef = firebase.firestore().collection('products').doc(p[index].id);
        docRef.delete()
        .then(() => {
            console.log('Deleted Successfully');
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }

    getProductCount = () => {
        let count = 0;
        let {product} = this.state;

        product.forEach((i) => {
            count += i.qty
        });

        // or
        // product.map((i) => {
        //     count += i.qty;
        // });    
        return count;
    }

    getTotalAmount = () => {
        let total = 0;
        let { product } = this.state;

        product.forEach((i) => {
            total += i.qty * i.price
        });

        return total;
    }

  render() {

    const { loading } = this.state;

    return (
      <div className="App">
        <Navbar 
            count= {this.getProductCount()}
            total = {this.getTotalAmount()} 
        />

        {
            loading 
        
            && 
        
            <div style={styles.loading}>
                <img style={styles.loadingGif} src="https://i.imgur.com/GLdqYB2.gif" alt="Loading..."/>
            </div>
        }

        
        <Cart
          handleIncreaseQuantity = {this.handleIncreaseQuantity}
          handleDecreaseQuantity = {this.handleDecreaseQuantity}
          handleDeleteProduct = {this.handleDeleteProduct}
          product = {this.state.product}
        />

        <button onClick={this.addProduct}>Add an Item</button>

      </div>
    );  
  }
}

var styles = {
    loadingGif: {
        height: 50,
        width: 50
    },
    loading: {
        textAlign: "center",
        marginTop: 50
    }
}

export default App;
