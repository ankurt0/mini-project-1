import React from 'react';

const CartItem=(props) =>{
   
        const {price,title,qty,id,img}=props.product;
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        alt="inc" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                        onClick={()=>props.onIncQuant(props.product)}                       
                        />
                        <img 
                        alt="dec" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/66/66889.svg"
                        onClick={()=>props.onDecQuant(props.product)}
                        />
                        <img 
                        alt="del" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                        onClick={()=>props.onDelQuant(id)}
                        />
                    </div>
                </div>
            </div>
        );
    
}

const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#777'
    }
}
export default CartItem