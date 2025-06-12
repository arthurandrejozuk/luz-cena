import React from 'react';
import styles from "./selectorGroup.module.css"

interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode 
}

const SelectorGroup = ({ icon, children, ...rest}: SelectorGroup) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select {...rest} className={styles.selector}>
        {children}
      </select>
    </div>
  )
}

export default SelectorGroup
