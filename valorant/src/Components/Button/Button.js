import React from 'react'
import styles from './Button.module.css'

const Button = ({children, ...props}) => {
  console.log({...props})
  return (
    <button {...props} className={styles.button}>{`${children.toUpperCase()}`}</button>
  )
}

export default Button