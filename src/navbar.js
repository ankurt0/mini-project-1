import React from 'react';


const Navbar=(props) =>{
    console.log(props.count);
        return(
           
            <div className="nav">
                <ul className="nav-item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
                <ul className="cart-icon">
                    <img 
                        alt="cart"
                        src="https://www.flaticon.com/svg/static/icons/svg/891/891462.svg" 
                    />
                    <span className="cart-count">{props.count}</span>
                </ul>
            </div>
        )
}

export default Navbar;