import React from 'react'
import styles from "../header.module.css"


interface HeaderItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string
}

const HeaderItem = ({children, href}:HeaderItemProps) => {
  return (
    <li className={styles.options_li}>
      <a href={href}>     
        {children}
      </a>
    </li>
  )
}

export default HeaderItem
