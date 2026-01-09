import Styles from "./sobre.module.css"

function Sobre(){
    return(
        <div>
            <div className={Styles.containerSobre}>
                <div className={Styles.hobbies}>
                    <h1>Anzol, linha e chumbada</h1>
                </div>
                <div className={Styles.textoSinopse}>
                    <p className={Styles.sinopse}>
                        Eu me apaixonei pela pesca. Meu avô me levou no barco dele, eu pesquei uma perca e, depois desse dia, queria estar na água o tempo todo. Passei um tempo na marinha, depois trabalhei em vários navios de pesca, até juntar dinheiro suficiente para comprar o meu. Agora, passo o dia fazendo o que eu amo e, à noite, registro tudo aqui.
                    </p>
                    <p className={Styles.sinopse}>
                        Aqui não tem daqueles artigos enormes comparando um equipamento com outro ou discutindo a tensão certa para puxar a vara. Meu foco são os elementos da pesca e por que essa atividade é tão prazerosa. É claro que, às vezes, também dou dicas para você pescar o peixe dos seus sonhos.
                    </p>
                    <p className={Styles.sinopse}>
                        Quem gostou do que leu aqui pode participar de um dos nossos passeios de pesca. Saímos todos os dias de Clearwater, FL e aceitamos pessoas de todas as idades e níveis de habilidades.
                    </p>
                    <p className={Styles.email}>email@exemplo.com</p>
                </div>
            </div>
            <div className={Styles.img}></div>
        </div>
    )
}

export default Sobre