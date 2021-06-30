import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RecipesPage from './pages/RecipesPage';
const App = () => {
  return (
      <BrowserRouter>
        <Switch> 
          <Route path='/' exact component={Home}/>
          <Route path='/a-propos' exact component={About}/> 
          <Route path='/recettes' exact component={RecipesPage}/> 
          <Route path='/contact' exact component={Contact}/> 
        </Switch>
      </BrowserRouter>
  );
};

export default App;