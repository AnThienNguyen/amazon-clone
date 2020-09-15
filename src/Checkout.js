import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>

                <div>
                <h3>Hello, {user?.email.substring(0, user?.email.indexOf("@"))}</h3>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {basket.length ?
                    <FlipMove
                    //flipmove addon animation
                    appearAnimation="fade"
                    enterAnimation="fade"
                    leaveAnimation="fade"
                  >
                    <div key={basket}>
                      {basket.map((item) => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                        />
                      ))}
                    </div>
                  </FlipMove> : 
                    <div className='empty'>
                        <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="empty_cart"/>
                        <div className='empty__message'>
                            <h2>Your basket is empty</h2>
                            {user ? null:<Link to="/login"><button className="checkout__login">Sign In</button></Link>}
                            <Link to="/"><button className="checkout__home">Go Shopping</button></Link>
                        </div>
                    </div>
                    }
                </div>

                <div className='line'> </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout
