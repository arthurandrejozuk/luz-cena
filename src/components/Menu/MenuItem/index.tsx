import React from 'react'

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement>{
    href?: string;
}

const MenuItem = ({children, href="#"}: MenuItemProps) => {
  return (
    <li>
        <a href={href}>
            {children}
        </a>
    </li>
  )
}

export default MenuItem
