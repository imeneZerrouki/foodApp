import React from 'react';
import { NavLink } from 'react-router-dom';
const Recipe = (props) => {
    const { recipe }= props;
    return (
        <div className='recipe' 
        onClick={()=>{ window.open(recipe.recipe.url)}}
        >
            <img src={recipe.recipe.image} alt="image" />
            <p>{recipe.recipe.label}</p> 
            <div className="affich">
                Appuyer pour voir la recette
            </div>
        </div>
    );
};

export default Recipe;