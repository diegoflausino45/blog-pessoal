import Styles from './home.module.css'
import { useState } from 'react'
import { postsMock } from '../../data/postsMock'
import pescador from   '../../Image/pescador.webp'
import { Link } from 'react-router-dom'

function Posts({id, imgsrc, data, title, paragrafo, to}){
    return(
        <div className={Styles.post} key={id}>
            <Link to={to}><img className={Styles.postImage} src={imgsrc} alt="" /></Link>
            <span className={Styles.data}>{data}</span>
            <Link to={to}><h2>{title}</h2></Link>             
            <p>{paragrafo}</p>       
            <div>
                <Link to={to} href="" className={Styles.link}>Leia mais</Link>      
            </div>
        </div>             
    )
}


function Home(){

    const [posts, setPosts] = useState([...postsMock])

    return(
        <div className={Styles.home}>
            <div className={Styles.containerPosts}>
                {posts.map(post => (
                    <Posts 
                        imgsrc={pescador} 
                        data={post.data} 
                        title={post.title} 
                        paragrafo={post.paragrafo}
                        to={post.to}
                    />
                ))}
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