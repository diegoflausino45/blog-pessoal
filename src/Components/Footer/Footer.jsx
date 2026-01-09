import Styles from './footer.module.css'
import {FiInstagram, FiYoutube, FiFacebook} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'



function Footer(){
    return(
        <div className={Styles.footer}>
            <h2>Diego Flausino</h2>
            <div>
                <ul className={Styles.menu}>
                    <NavLink to={'/'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`}><li>Blog</li></NavLink>
                    <NavLink to={'/sobre'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`} ><li>Sobre</li></NavLink>
                    <NavLink to={'/galeria'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`}><li>Galeria</li></NavLink>
                </ul>
            </div>
            <div className={Styles.redes}>
                <FiYoutube size={24} className={Styles.redesIcon}/> 
                <FiFacebook size={24} className={Styles.redesIcon}/>
                <FiInstagram size={24} className={Styles.redesIcon}/>
            </div>
            <p>Feito por <span>Diego Flausino</span></p>
        </div>
    )
}

export default Footer