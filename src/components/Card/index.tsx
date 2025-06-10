import styles from "./card.module.css" 

export interface ICard {
    src: string,
    title: string,
    genre: string,
    time: string,
    yearsOld: string,
    videoType: string
}

export default function Card({src, title, genre, time, yearsOld, videoType}:ICard){
    return(
        <a href="/filme">
        <div className={styles.card_container}>
            <img src={src} alt="imagem de cartaz" />
            <div className={styles.card}>
                <h3>{title}</h3>
                <div className={styles.card_info}>
                    <div className={styles.card_gen_min}>
                        <p>{genre}</p>
                        <p>{time} Minutos</p>
                    </div>
                    <div className={styles.card_vid_age}>
                        <p className={styles.tipo_video}>{videoType}</p>
                        <p className={styles.idade}>{yearsOld} anos</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
    
}