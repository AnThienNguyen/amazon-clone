import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg" alt=""/>

                < div className="home__row">
                    <Product id="12345678"
                    title='Bluetooth Over-Ear Headphones, Zihnic Foldable Wireless and Wired Stereo Headset Micro SD/TF,Soft Earmuffs & Light Weight for Prolonged Waring (Rose Gold)' 
                    price={29.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51eAhFCg5mL._AC_SL1000_.jpg' 
                    />
                    <Product id="23445930"
                    title='Vospeed Stand Mixer, 6 QT 660W 6-Speed Tilt-Head Electric cake mixer with Stainless Steel Bowl, Beater, Hook, Whisk, Egg white separator,Dishwasher Safe (Silver)' 
                    price={119.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/610F%2BOpm5tL._AC_SL1000_.jpg' 
                    />
                </div>

                < div className="home__row">
                    <Product id="27364918"
                    title='Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor' 
                    price={199.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SL1500_.jpg' 
                    />
                    <Product id="28930495"
                    title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal' 
                    price={29.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61qDKbBlcgL._AC_SL1000_.jpg' 
                    />
                    <Product id=""
                    title='New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray (4th Generation)' 
                    price={1649.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg' 
                    />
                </div>

                < div className="home__row">
                    <Product id="85476634"
                    title='Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)' 
                    price={278.99} 
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg' 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
