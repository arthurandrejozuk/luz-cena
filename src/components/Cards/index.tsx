
import Card, { type ICard } from "../Card";
import styles from "./cards.module.css";


export default function Cards({destaque, movies}:{destaque:string, movies: ICard[]}){
    

    return(
        <div className={styles.container}>
            <h1>
                {destaque}
            </h1>
            <div className={styles.filmes}>
                {movies.map(movie => {
                    return(
                        <Card 
                            title={movie.title}
                            alt={movie.alt}
                            genre={movie.genre}
                            videoType={movie.genre}
                            src={movie.src}
                            censura={movie.censura}
                            time={movie.time}
                            id={movie.id}
                        />
                    )
                }) }
            </div>
        </div>
    )
}