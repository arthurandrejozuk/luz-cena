
import LogoImg from "../../assets/logo/Logo.png";
import Carrinho from "../../assets/icons/Carrinho.png";
import Perfil from "../../assets/icons/Perfil.png";
import styles from "./header.module.css"
import Ham from "../../assets/icons/menu.png"
import Menu from "../Menu";
import { useState } from "react";
import HeaderFormFIlter from "./components/HeaderFormFIlter";
import Logo from "../Logo";

export default function Header(){

     const [active, setActive] = useState(false);

    return(
        <header className={styles.header}>
            {/* <HeaderList>
                <HeaderItem>
                    <Logo src={LogoImg}/>
                </HeaderItem>
                <HeaderItem>
                    <HeaderLinks/>
                </HeaderItem>
                <HeaderItem>
                    <HeaderFormFIlter/>
                </HeaderItem>
                <HeaderItem>
                    <HeaderActions/>
                </HeaderItem>
            </HeaderList> */}
            <div className={styles.header_container}>
                <div className={styles.ham_container}>
                    <img onClick={() => setActive(!active)} className={styles.ham_menu} src={Ham}/>
                    <Menu active={active}/>
                </div>
                <Logo src={LogoImg}/>
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
                     <HeaderFormFIlter/>
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