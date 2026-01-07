import Styles from './home.module.css'
import pescador from '../../Image/pescador.webp'

function Home(){
    return(
        <div className={Styles.home}>
            <div className={Styles.containerPosts}>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>       
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>
                </div>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>  
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>
                </div>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p> 
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>      
                </div>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p> 
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>     
                </div>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p> 
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>
                </div>
                <div className={Styles.post}>
                    <img className={Styles.postImage} src={pescador} alt="" />
                    <span className={Styles.data}>29/02/2025</span>
                    <h2>Pescando Redfins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p> 
                    <div>
                        <a href="" className={Styles.link}>Leia mais</a>      
                    </div>     
                </div>
            </div>

            <div className={Styles.containerEmail}>
                <h1>Melhor pesca da semana</h1>
                <p>Cadastre seu endereço de e-mail para receber novidades e atualizações.</p>
                <div className={Styles.form}>
                    <input className={Styles.input} type="email" name="email" id="" placeholder='Endereço de e-mail' />
                    <button className={Styles.button}>Cadastra-se</button>
                </div>
            </div>
        </div>
    )
}


export default Home