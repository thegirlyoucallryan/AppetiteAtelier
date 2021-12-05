
import styles from './RecipeDetail.module.css';
import { IoBookmark, IoBookSharp} from "react-icons/io5";
import NavBar from '../components/NavBar';

const RecipeDetail = (props) => {
 

  return(
      
      <section className={styles.recipeBlock}>
        <NavBar/>
        <div className={styles.titlebox}>
        <h1 className={styles.recipeTitle}>{props.title}</h1>
        <div className={styles.recipeLevel}>

         
         <h3 className={styles.time}>Total time: {props.time}</h3>
         <h3 className={styles.time}>Total Servings: {props.servings}</h3>
         </div>
         </div>
       
           <div className={styles.imageBox}>
         <img alt={props.title} src={props.image} className={styles.image} />
        
       
         
         
         </div>
         <div className={styles.detailContainer}>
         <ol>
           {props.ingredients.map((ingredients) => (<li key={props.id} className={styles.ingredients}>{ingredients}</li>))}
         </ol>
         <div className={styles.button}>
         <a className={styles.instructionLink} href={props.url} target="popup"><IoBookSharp /> See Instructions</a>
         <a className={styles.instructionLink} href={props.url} ><IoBookmark />  Bookmark</a>
         </div>
          </div>
          <div className={styles.nutritionBox}>
        
          <ul>
            <h1>Nutrition Facts</h1>
            {(props.nutrition.length === 0) && <h2 className={styles.sansNutrition}>Nutrition Facts Not Available</h2>}
            <div className={styles.leftCol}>
         
          {props.nutrition.map((attributes) => (<li key={props.id} className={styles.ingredients}>{attributes}</li>))}
            </div>
            <div className={styles.rightCol}>
          {props.value.map((attributes) => (<li key={props.id} className={styles.ingredients}>{attributes}</li>))}
            </div>
          </ul>
       
         
         
         </div>
      </section>
  )
}

export default RecipeDetail;