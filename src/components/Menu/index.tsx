import styles from "./menu.module.css"

export default function Menu({active} : {active: boolean}){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if(active) {
        return(
            <div>
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
            </div>
        )
    }
 return <></>
}