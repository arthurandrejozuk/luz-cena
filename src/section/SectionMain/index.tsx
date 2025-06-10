import { useEffect, useState } from "react";
import Lupa from "../../assets/icons/search.png";
import styles from "./section.module.css";
import Cards from "../../components/Cards";

export default function SectionMain() {
    const [hash, setHash] = useState(window.location.hash);
    const [destaque, setDestaque] = useState("Em cartaz")

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

   
    return (
        <section>
            <div className={styles.margin}>     
                <ul >
                    <li
                        onClick={() =>{ 
                            window.location.hash = "em-cartaz"
                            setDestaque("Em cartaz");
                        }}
                        className={
                            hash === "#em-cartaz"
                                ? styles.option_li_em_cartaz_active
                                : styles.option_li
                        }
                    >
                        Em cartaz
                    </li>
                    <li
                        onClick={() => {
                            window.location.hash = "em-breve"
                            setDestaque("Em breve")
                        }}
                        className={
                            hash === "#em-breve"
                                ? styles.option_li_em_breve_active
                                : styles.option_li
                        }
                    >
                        Em breve
                    </li>
                </ul>
                <div className={styles.busca_container}>
                    <input type="text" placeholder="Digite sua busca" />
                    <img src={Lupa} />
                </div>
            </div>
            <Cards destaque={destaque}/>
        </section>
    );
}