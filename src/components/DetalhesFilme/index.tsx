import styles from "./detalhes_filme.module.css"
import Cartaz from "../../assets/thumb/cartaz.png";
import Thumb from "../../assets/thumb/thumb_video.png"


export default function DetalhesFilme() {
    return(
        <section className={styles.container}>
            <div className={styles.container_filme}>
                <img src={Cartaz} alt="Cartaz" />
                <div className={styles.detalhes_filme}>
                    <div className={styles.detalhes_filme_conteudo}>   
                        <h1>O Nexus do Tempo</h1>
                        <div className={styles.detalhes_tempo_tipo}>
                            <p>Ficção cientifica</p>
                            <p>105 minutos</p>
                        </div>
                    </div>
                    <div className={styles.detalhes_direcao}>
                        <p><span>Direção: </span>Alicia Valente</p>
                        <p><span>Elenco: </span>Maya Sinclair, Sophie Laurent, Ethan Drake, Liam Monroe</p>
                    </div>
                </div>
                <div className={styles.detalhes_trailer}>
                    <img src={Thumb} alt="" />
                    <button>Assistir trailer</button>
                </div>
            </div>
            <div className={styles.sinopse}>
                <h1>Sinopse</h1>
                <p>Uma cientista desiludida descobre um portal temporal escondido em um laboratório abandonado. Ao tentar reverter uma catástrofe global iminente, ela inadvertidamente cria múltiplas linhas do tempo conflitantes. Agora, com a ajuda de um misterioso viajante do futuro, ela deve corrigir os erros que ela mesma causou para salvar a humanidade. Mas quanto mais ela mexe no fluxo do tempo, mais ela se vê questionando a própria natureza da realidade.</p>
            </div>
        </section>
    )
}