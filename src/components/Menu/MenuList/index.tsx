import React from 'react'

const MenuList = ({children}:React.HtmlHTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
        <ul>
            {children}
        </ul>
    </nav>
  )
}

export default MenuList;
