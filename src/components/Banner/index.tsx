
import styles from "./banner.module.css"


export default function Banner({image, alt}:{image?:string, alt?: string}){
    return(
        <div className={styles.banner_container}>
            <img src={image} alt={alt}/>
        </div>
    )
}