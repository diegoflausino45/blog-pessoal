import Styles from './galeria.module.css'
import pescador from '../../Image/pescador.webp'

function FotosGaleria(){
    return(
        <div className={Styles.col01}>
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={`${Styles.galeriaImg} ${Styles.Maior01}`} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
        </div>
    )
}

function Galeria(){
    return(
        <div className={Styles.containerGaleria}>
            <FotosGaleria/>
            <FotosGaleria/>
            <FotosGaleria/>
        </div>
    )
}


export default Galeria