import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    render()
    {
        const {products} = this.props;
        return(
            <div className="cart"> 
                {   
                    products.map((product)=>{
                        //console.log(product);
                        return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncQuant={this.props.incQuantity}
                            onDecQuant={this.props.decQuantity}
                            onDelQuant={this.props.delQuantity}
                        />)
                    })
                }
            </div>
        );
    }
}

export default Cart;