import Styles from './galeria.module.css'
import pescador from '../../Image/pescador.webp'

function Galeria(){
    return(
        <div className={Styles.containerGaleria}>
            <div className={Styles.col01}>
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={`${Styles.galeriaImg} ${Styles.Maior01}`} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
            </div>
            <div className={Styles.col02}>
                <img className={`${Styles.galeriaImg} ${Styles.Maior
                }`} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
            </div>
            <div className={Styles.col03}>
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
                <img className={Styles.galeriaImg} src={pescador} alt="" />
            </div>
        </div>
    )
}


export default Galeria