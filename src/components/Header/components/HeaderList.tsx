import React from 'react'
import styles from "../header.module.css"

const HeaderList = ({children}:React.HTMLAttributes<HTMLUListElement>) => {
  return (
   <ul className={styles.options_ul}>
    {children}
   </ul>
  )
}

export default HeaderList;
