import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch item in data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <img src={image} alt=''/>
            <div className='product__info'>
                <p className='product__title'>{title}</p>
                <p className='product__price'>
                    
                    <strong><small>$</small>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                    <p>★</p>
                    ))}
                </div>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
