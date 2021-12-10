import React, {useState} from 'react';
import RecipeList from './RecipeList';
import styles from './RecipeSearch.module.css';

import NavBar from '../components/NavBar';






const RecipeSearch = () => {

    const [query, setQuery] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const queryHandler = (e) => {
        console.log(e.target.value)
      setQuery(e.target.value)
      
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetchRecipeHandler();
        setQuery(' ')

      
    }

    function fetchRecipeHandler() {

        if(query <= 0){
            return
        };

       

        const url = `https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=${query}`

        fetch(url, {
            
            "headers": {
                "x-rapidapi-host": "yummly2.p.rapidapi.com",
                "x-rapidapi-key": "c017845ef5mshd7a066a67f539f9p128aa9jsnfdf7cb262ed8"
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data.feed)
            const recipeData = data.feed.map((recipes) => {
                return {
                    id: recipes.content.details.id,
                    title: recipes.display.displayName,
                    image: recipes.display.images[0],
                    websiteURL: recipes.content.details.directionsUrl,
                    ingredientsList: recipes.content.ingredientLines.map((ingredient => ingredient.wholeLine))

                   
                }
            
         
            })
            console.log(recipeData)
            setRecipes(recipeData);
           
        }).catch(err => {
            console.error(err);
        });
    }


    return(
     

        <div>
    


            <form type="submit" onSubmit={submitHandler}> 
            <div className={styles.searchContainer}>
            <input className={styles.searchBar} type='text' placeholder="Search by Recipe or Ingredient" onChange={queryHandler} value={query} ></input>
            <button className={styles.button} type='submit'> Search</button>
            </div>
            <NavBar />
            </form>
           
      
   
       
        <div>
       
            {(recipes.length > 0) && recipes.map((recipe) => (<RecipeList key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />))}
            {(recipes.length === 0) && <h1 className={styles.rejectionMessage}>Search for a Recipe</h1>}
            
           
        </div>
     
           

        </div>
    )
  
}

export default RecipeSearch;