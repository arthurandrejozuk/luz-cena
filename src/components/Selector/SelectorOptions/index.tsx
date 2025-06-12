import React from 'react'

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
    label: string
    value: string   
}

const SelectorOption = ({label, value, ...rest}: SelectorOption) => {
  return (
    <option {...rest} value={value}>
        {label}
    </option>
  )
}

export default SelectorOption
