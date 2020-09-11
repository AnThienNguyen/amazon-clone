import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <div className='order'>
            <div className='order__detail'>
                <small>Order Placed</small>
                <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
                <small className="order__id">
                    Order ID: {order.id}
                </small>
            </div>
            <p></p>
            {order.data.basket?.map(item => (
                <div className='order__detail'>
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                    />
                </div>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <p className="order__total">Order Total: {value}</p>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order