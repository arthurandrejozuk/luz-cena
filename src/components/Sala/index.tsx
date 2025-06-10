
import styles from "./sala.module.css";

export default function Sala(){
    return(
        <div className={styles.container}>
            <div className={styles.sala}>
                <h1>Sala 1</h1>
                <div className={styles.sala_info_idade}>
                    <p className={styles.idade}>10 anos</p>
                    <p>2D</p>
                </div>
            </div>
            <div className={styles.horario}>
                <p className={styles.time}>19:30</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}