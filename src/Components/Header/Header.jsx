import Styles from './header.module.css'
import {FiInstagram, FiYoutube, FiFacebook} from 'react-icons/fi'


function Header(){
    return(
        <div className={Styles.header}>
            <div>
                <ul className={Styles.menu}>
                    <li>Blog</li>
                    <li>Sobre</li>
                    <li>Galeria</li>
                </ul>
            </div>
            <div className={Styles.titulo}>
                <h2>Titulo</h2>
            </div>
            <div className={Styles.redes}>
                <FiYoutube size={24} className={Styles.redesIcon}/> 
                <FiFacebook size={24} className={Styles.redesIcon}/>
                <FiInstagram size={24} className={Styles.redesIcon}/>
            </div>
        </div>
    )
}


export default Header