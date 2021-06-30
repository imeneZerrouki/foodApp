import React from 'react';
import Menu from '../components/Menu';
import food from '../images/food.jpg'
const Home = () => {
    return (
        <div className='home'>
            <Menu/>
            <div>
                <h2>Discover with us thousands of recipes</h2>
                <img src={food}/>
            </div>
        </div>
    );
};

export default Home;