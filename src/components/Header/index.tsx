
import LogoImg from "../../assets/logo/Logo.png";
import styles from "./header.module.css"
import Ham from "../../assets/icons/menu.png"
import Menu from "../Menu";
import { useState } from "react";
import HeaderFormFilter from "./components/HeaderFormFIlter";
import Logo from "../Logo";
import HeaderActions from "./components/HeaderActions";
import HeaderItem from "./components/HeaderItem";
import HeaderList from "./components/HeaderList";

export default function Header(){

     const [active, setActive] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.ham_container}>
                    <img onClick={() => setActive(!active)} className={styles.ham_menu} src={Ham}/>
                    <Menu active={active}/>
                </div>
                <Logo src={LogoImg}/>
                <HeaderList>
                    <HeaderItem href="/">
                        Eventos
                    </HeaderItem>
                   <HeaderItem href="/">
                        Club de fidelidade
                    </HeaderItem>
                     <HeaderItem href="/">
                        Sobre nós
                    </HeaderItem>
                </HeaderList>
                <div className={styles.localizacao_container}>
                     <HeaderFormFilter/>
                </div>
                <HeaderActions/>
            </div>
        </header>
    )
}