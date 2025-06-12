import styles from "./card.module.css" 

export interface ICard {
    id:number,
    alt:string
    src: string,
    title: string,
    genre: string,
    time: number,
    censura: string,
    videoType: string
}

export default function Card({id, src, title, genre, time, censura, videoType, alt}:ICard){
    return(
        <a href="/filme">
        <div key={id} className={styles.card_container}>
            <img src={src} alt={alt} />
            <div className={styles.card}>
                <h3>{title}</h3>
                <div className={styles.card_info}>
                    <div className={styles.card_gen_min}>
                        <p>{genre}</p>
                        <p>{time} Minutos</p>
                    </div>
                    <div className={styles.card_vid_age}>
                        <p className={styles.tipo_video}>{videoType}</p>
                        <p className={styles.idade}>{censura}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
    
}