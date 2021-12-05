

import React from 'react';
import RecipeSearch from './Pages/RecipeSearch';
import BookMarks from './Pages/BookMarks'
import './index.css'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import MainHeader from './components/Header'
import RecipeItem from './Pages/RecipeItem';



const App = () => {

    




    return(
        <div>
            <MainHeader />
          

            <main>
        <Switch>
        <BrowserRouter>
           <Route path="/" exact>
               <Redirect to='/search'/>
           
           </Route>
           <Route path="/search">
               <RecipeSearch />
               </Route>
           <Route path="/bookmarks">
               <BookMarks />
           </Route>
           <Route path='/recipes/:recipeId' component={RecipeItem}>
               

           </Route>
           </BrowserRouter>
           </Switch>
           </main>
        
        </div>
    )
  
}

export default App;