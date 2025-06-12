
import classNames from "classnames"
import styles from "./button.module.css"


type ButtonProps = {
    variant: "default" | "icon"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, variant="default", ...rest}: ButtonProps){
    const classMap = {
        default: styles.default,
        icon: styles.icon
    }
    return(
        <button {...rest} className={classNames(styles.botao, classMap[variant])}>{children}</button>
    )
}