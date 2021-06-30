import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <header className='menu'>
            <div className="logo"> RecipesApp</div>
            <div className="menuItems">
                <NavLink exact to="/" activeClassName="nav-active">
                    Home
                </NavLink>

                <NavLink exact to="/recettes" activeClassName="nav-active">
                    Recipes
                </NavLink>

                <NavLink exact to="a-propos" activeClassName="nav-active">
                    About
                </NavLink> 
                <NavLink exact to="contact" activeClassName="nav-active">
                    Contact us
                </NavLink> 
            </div>
        </header>
    );
};

export default Menu;