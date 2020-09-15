import React from 'react';
import './Prime.css';
import Product from './Product.js';
import Info from './Info.js';

function Prime() {
    return (
        <div className='prime'>
            <div className='prime__container'>
                <img className="prime__banner" src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/JJ/1500x300_EN.jpg" alt=""/>

                <div className="prime__row">
                    <Info 
                    title='Prime Video'
                    image='https://m.media-amazon.com/images/G/01/digital/video/merch/2019/Other/Robo_657_Illustrations_Test/GW//GW_Dashboard_Robo_657_test_520x520._CB1548273221_.jpg' 
                    description="Enjoy what's already yours - watch Amazon Originals, movies & TV shows"
                    />
                    <Info 
                    title='Amazon Day Delivery'
                    image='https://m.media-amazon.com/images/G/01/dex/2020/Amazonday/XCM_Manual_1223816_1170158_US_us_dex_amazon_day_prime_placements_3082378_520x520_null_en_US.jpg' 
                    description="Shop throughout the week and get your orders delivered together on a single day"
                    />                    
                    <Info 
                    title='Whole Foods Market'
                    image='https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/storepages/seo/stores-og.png'
                    description="Get hungry for local, organic, plant-based & more!"
                    />
                    <Info 
                    title='Enjoy New Music Free'
                    image='https://m.media-amazon.com/images/G/01/AmazonMusic/2020/Marketing/Engagement/PrimeNewsletter/MAI_lifestyle_image_002VC_CB420057161_.jpg'
                    description="Enjoy music for working from home, ad-free with Prime"
                    />
                </div>

                <div className='prime__ad'> 
                <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/LandingPage/2OFF/090820_US-en_desktop_landing_prime_member_1500x270_PRIME.jpg' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Prime
