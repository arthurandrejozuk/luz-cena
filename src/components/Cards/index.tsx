import Thumb from "../../assets/thumb/cartaz.png"
import Card from "../Card";
import styles from "./cards.module.css";

export default function Cards({destaque}:{destaque:string}){
    return(
        <div className={styles.container}>
            <h1>
                {destaque}
            </h1>
            <Card 
                src={Thumb} 
                title="Amigos da Sombra"
                genre="Suspense"
                time="110"
                videoType="2D"
                yearsOld="12"
            />
        </div>
    )
}