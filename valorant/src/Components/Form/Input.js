import React, { Children } from 'react'
import styles from './Input.module.css'

const Input = ({type, id, children, name}) => {
  return (
    <input className={styles.input}   
       type={type}
       id={id}
       name={name}
       placeholder={name}
    />
   
  )
}

export default Input