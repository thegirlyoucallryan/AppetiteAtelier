import { Link } from 'react-router-dom';
import styles from './RecipeList.module.css';




const RecipeList = (props) => {

    

    return(
        <div>
            
            <section className={styles.container}>
                <ul className={styles.linkBox}>

            
                    <li className={styles.li}><Link className={styles.link}  to={`/recipes/${props.id}`}> <img src={props.image} alt={props.title}/> 
                    <h1 className={styles.title}>{props.title}</h1>
                    </Link> 
                    
                    </li>
           
                   
                </ul>
            </section>
        </div>
    )
  
}

export default RecipeList;