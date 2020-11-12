import React from 'react';
import Cart from './Cart';
import Navbar from './navbar';
import Footer from './footer';
import firebase from 'firebase';

class App extends React.Component {
  constructor()
    {
        super();
        this.state={
            products: [],
            loading : true
        }
    }

    componentDidMount(){
      firebase
      .firestore()
      .collection('products')
      .orderBy('price','desc')
      .onSnapshot((snapshot)=>{
        //console.log(snapshot);

        //snapshot.docs.map((doc)=>{
        //  console.log(doc.data())
        //});

        const products=snapshot.docs.map((doc)=>{
          const data =doc.data();
          data['id']=doc.id;
          return data;
        })

        this.setState({
          products:products,
          loading:false
        })
      })
    }

  
    addProduct=()=>{
      firebase
      .firestore()
      .collection('products')
      .add(
        {
          title: 'Washing machine',
          qty: 1,
          price: 8000,
          img: 'data:image/jpeg;base64,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'
        }
      )
      .then((docref)=>{
        console.log("This is docref", docref);
      })
      .catch((error)=>{
        console.log("error",error);
      })
    }

    incQuantity=(product)=>{
      console.log('increase the product', product);
      const {products}=this.state;
      const index=products.indexOf(product);
      //console.log(index);

      const docref=firebase.firestore().collection('products').doc(products[index].id);
      docref
        .update({
          qty: products[index].qty+1
        })
        .then(()=>{
          console.log('doc updated successfully')
        })
        .catch((error)=>{
          console.log('error',error)
        })
  }

  decQuantity=(product)=>{
      const{products}=this.state;
      const index=products.indexOf(product);

      const docref= firebase.firestore().collection('products').doc(products[index].id);

      if(products[index].qty===0)
      {
        return;
      }

      docref
        .update(
          {
            qty: products[index].qty-1,
          }
        )
        .then(()=>{
          console.log('doc updated successfully')
        })
        .catch((error)=>{
          console.log('error', error)
        })
  }

  delQuantity=(id)=>{
      const docref=firebase.firestore().collection('products').doc(id);

      docref
        .delete()
        .then(()=>{
          console.log('successfully deleted')
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  cartCount=()=>{
      let sum=0
      this.state.products.forEach((prod)=>{
        sum+=prod.qty;
      })
      //console.log(sum);
      return sum;
  }

  totalPrice=()=>{
    let sum=0
    this.state.products.forEach((prod)=>{
      sum+=(prod.qty*prod.price);
    })
    //console.log(sum);
    return sum;
  }

  render(){

    const {products,loading}=this.state;

  return (
    
    <div className="App">
      <Navbar count={this.cartCount()}/>
      <button style={{margin: 10,  padding: 10, fontSize: 20 }} onClick={this.addProduct}>Add new product</button>
     <Cart products={products} incQuantity={this.incQuantity} decQuantity={this.decQuantity} delQuantity={this.delQuantity}/>
     {loading && <h1>loading please wait.....</h1>}
     <Footer total={this.totalPrice()}/>
    </div>
  
  );
  }
}

export default App;
