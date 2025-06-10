import BannerImage from "../../assets/banners/Banner_dragon.png"
import styles from "./inscrever.module.css";

export default function Inscrever(){
    return(
        <div className={styles.container}>
            <img src={BannerImage} alt="Combo de Pipoca Dragon's Ascent"/>
            <div className={styles.descontos}>
                <h1>Inscreva-se para ganhar descontos!</h1>
                <div className={styles.descontos_input}>
                    <input type="text" placeholder="Digite seu melhor email" />
                    <button>Inscrever</button>
                </div>
            </div>
        </div>
    )
}