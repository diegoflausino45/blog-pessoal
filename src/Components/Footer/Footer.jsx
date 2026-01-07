import Styles from './footer.module.css'
import {FiInstagram, FiYoutube, FiFacebook} from 'react-icons/fi'



function Footer(){
    return(
        <div className={Styles.footer}>
            <h2>Diego Flausino</h2>
            <div>
                <ul className={Styles.menu}>
                    <li>Blog</li>
                    <li>Sobre</li>
                    <li>Galeria</li>
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