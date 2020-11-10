import React from 'react';
import Cart from './Cart';
import { render } from '@testing-library/react';
import Navbar from './navbar';
import Footer from './footer';

class App extends React.Component {
  constructor()
    {
        super();
        this.state={
            products: [
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 1999,
                    title: 'Earphones',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 3
                },
                {
                    price: 299,
                    title: 'Perfume',
                    qty: 1,
                    img: '',
                    id: 4
                },
            ]
        }
    }

    incQuantity=(product)=>{
      console.log('increase the product', product);
      const {products}=this.state;
      const index=products.indexOf(product);
      console.log(index);
      products[index].qty+=1;

      return(this.setState({
          products: products
      }
      ))
  }

  decQuantity=(product)=>{
      const{products}=this.state;
      const index=products.indexOf(product);

      {products[index].qty!==0? products[index].qty-=1 : products[index].qty=0 }
      return(this.setState({
          products: products
      }
      ))
  }

  delQuantity=(id)=>{
      const{products}=this.state;
      const items=products.filter((item)=> item.id!==id);

      this.setState(
          {
              products: items
          }
      )
  }

  cartCount=()=>{
      let sum=0
      this.state.products.forEach((prod)=>{
        sum+=prod.qty;
      })
      console.log(sum);
      return sum;
  }

  totalPrice=()=>{
    let sum=0
    this.state.products.forEach((prod)=>{
      sum+=(prod.qty*prod.price);
    })
    console.log(sum);
    return sum;
  }

  render(){

    const {products}=this.state;

  return (
    
    <div className="App">
      <Navbar count={this.cartCount()}/>
     <Cart products={products} incQuantity={this.incQuantity} decQuantity={this.decQuantity} delQuantity={this.delQuantity}/>
     <Footer total={this.totalPrice()}/>
    </div>
  
  );
  }
}

export default App;
