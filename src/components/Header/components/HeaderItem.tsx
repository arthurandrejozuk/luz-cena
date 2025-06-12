import React from 'react'
import styles from "../header.module.css"

const HeaderItem = ({children}:React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.options_li}>
        {children}
    </li>
  )
}

export default HeaderItem
