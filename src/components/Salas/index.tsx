
import styles from "./salas.module.css"
import LocationOn from "../../assets/icons/location_on.png";
import Sala from "../Sala";


export default function Salas(){
    return(
        <div className={styles.container}>
            <div className={styles.sessoes}>
                <h1>Próximas Sessões</h1>
                <div className={styles.date_location}>
                    <div>
                        <input type="date" />
                    </div>
                    <div className={styles.localizacao_container}>
                        <input type="text" />
                        <img src={LocationOn} alt="Localização ativada" />
                    </div>
                </div>
            <Sala/>
            </div>
        </div>
    )
}