import styles from "./sobre.module.css";
import Logo from "../../assets/logo/Logo_white.png";
import WhatsApp from "../../assets/redes/Whatsapp.svg";
import Instagram from "../../assets/redes/Instragam.svg";
import TikTok from "../../assets/redes/Tiktok.svg"
import Banner from "../../assets/banners/Tarjeta.png"

export default function Sobre(){
    return(
        <div className={styles.container}>
            <img className={styles.tarjeta} src={Banner} />
            <div className={styles.sobre_container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo Luz & Cena"/>
                    <p>Onde a realidade encontra a fantasia!</p>
                </div>
                <div className={styles.horarios}>  
                    <h3>Funcionamento</h3>
                    <p>Segunda a Sexta - 16h às 00h</p>
                    <p>ala@luzecena.com.br</p>
                    <p>0800 541 320</p>
                </div>
                <div className={styles.sobre}>
                    <h3>
                        Institucional
                    </h3>
                    <p>Sobre nós</p>
                    <p>Para empresas</p>
                    <p>Club fidelidade</p>
                </div>
                <div className={styles.redes}>
                    <h3>Siga nossas redes:</h3>  
                    <div className={styles.options}>
                        <img src={WhatsApp} alt="Icone do WhatsApp" />
                        <img src={Instagram} alt="Icone do Instagram"/>
                        <img src={TikTok} alt="Icone do TikTok"/>
                    </div>
                </div>
            </div>
        </div>
    )
}