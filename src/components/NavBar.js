
import { NavLink } from "react-router-dom";

import styles from '../components/NavBar.module.css'


const NavBar = (props) => {
    return(
        <footer>
            <nav> 
        
                <ul className={styles.navLinks}> 
                    <li>
                        <NavLink activeClassName={styles.active} className={styles.links} to='/search'>Search</NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={styles.active}  className={styles.links} to='/bookmarks'>Bookmarks</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
  

}


export default NavBar;