import Styles from './header.module.css'
import {FiInstagram, FiYoutube, FiFacebook} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useRef } from 'react';


function Header(){
    const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 32; // ~2em (ajuste se quiser)

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // desceu e passou do limite
      if (currentScroll > lastScrollY.current && currentScroll > threshold) {
        setHidden(true);
      }

      // subiu
      if (currentScroll < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <div className={`${Styles.header} ${hidden ? Styles.hidden : ""}`}>
            <div>
                <ul className={Styles.menu}>
                    <NavLink to={'/'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`}><li>Blog</li></NavLink>
                    <NavLink to={'/sobre'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`} ><li>Sobre</li></NavLink>
                    <NavLink to={'/galeria'} className={({isActive}) => `${Styles.menuLink} ${isActive ? Styles.active : ""}`}><li>Galeria</li></NavLink>
                </ul>
            </div>
            <div className={Styles.titulo}>
                <h2>Diego Flausino</h2>
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