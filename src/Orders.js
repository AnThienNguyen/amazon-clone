import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css';
import Order from './Order'
import { useStateValue } from "./StateProvider";
import {Link} from "react-router-dom";

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        else{
            setOrders([])
        }
        
    }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            {user ? 
                <div className='orders__order'>
                    {orders?.map(order => (
                        <Order order={order} />
                    ))}
                </div> :
                <div className='no__user'>
                    <h2>Oops! Looks like you're not signed in.</h2>
                    <p>You must have an account to load your data.</p>
                    <Link to="/login"><button className="orders__login">Sign in to your account</button></Link>
                </div>
            }
        </div>
    )
}

export default Orders
