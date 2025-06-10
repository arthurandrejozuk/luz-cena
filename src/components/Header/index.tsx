
import Logo from "../../assets/logo/Logo.png";
import LocationOn from "../../assets/icons/location_on.png";
import Carrinho from "../../assets/icons/Carrinho.png";
import Perfil from "../../assets/icons/Perfil.png";
import styles from "./header.module.css"
import Ham from "../../assets/icons/menu.png"
import Menu from "../Menu";
import { useState } from "react";

export default function Header(){

     const [active, setActive] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.ham_container}>
                    <img onClick={() => setActive(!active)} className={styles.ham_menu} src={Ham}/>
                    <Menu active={active}/>
                </div>
                <img src={Logo} alt="Logo Luz e Cena" />
                <ul className={styles.options_ul}>
                    <li>
                        <a href="">
                            Eventos
                        </a>
                    </li>
                      <li>
                        <a href="">
                            Club fidelidade
                        </a>
                    </li>
                      <li>
                        <a href="">
                            Sobre nós
                        </a>
                    </li>
                </ul>
                <div className={styles.localizacao_container}>
                    <input type="text" />
                    <img src={LocationOn} alt="Localização ativada" />
                </div>
                <div className={styles.botoes_container}>
                    <button>
                        <img src={Carrinho} alt="Botão do Carrinho" />
                    </button>
                    <button>
                         <img src={Perfil} alt="Botão do Perfil" />
                    </button>
                </div>
            </div>
        </header>
    )
}