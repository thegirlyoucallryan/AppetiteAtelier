import {useState, useEffect} from 'react';
import RecipeDetail from './RecipeDetails';

const RecipeItem = (props) => {

  const [recipe, setRecipe] = useState()

  function fetchRecipeHandler(id) {

    const url = `https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=${id}`
  
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
                ingredientsList: recipes.content.ingredientLines.map((ingredient => ingredient.wholeLine)),
                time: recipes.content.details.totalTime,
                servings: recipes.content.details.numberOfServings,
                nutrition: recipes.content.nutrition.nutritionEstimates.map((attributes => attributes.attribute)),
                value: recipes.content.nutrition.nutritionEstimates.map((attributes => attributes.value)),
  
            }
        })
        console.log(recipeData)
        setRecipe(recipeData)
       
  
        
       
    }).catch(err => {
        console.error(err);
    });
  }
  


  let id = props.match.params.recipeId;

  useEffect(async function () {
          await fetchRecipeHandler(id);
      }, [id])
  

  return(
      
      <div>
        { (!recipe) && <div>...Loading</div>}

    {(recipe) && <RecipeDetail 
        key={recipe[0].id}
      title={recipe[0].title} 
      image={recipe[0].image}
      ingredients={recipe[0].ingredientsList}
      url={recipe[0].websiteURL}
      time={recipe[0].time}
      servings={recipe[0].servings}
      value={recipe[0].value}
      nutrition={recipe[0].nutrition}>
      </RecipeDetail>
    }
    </div>)
}
    



export default RecipeItem;



///Thank you steven grinder Modern React with Redux course video 362 component isolation with react router

//async await useeffect?
