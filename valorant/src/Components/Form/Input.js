import React, { Children } from 'react'
import styles from './Input.module.css'

const Input = ({type, id, children, name, onChange}) => {
  return (
    <input className={styles.input}   
       type={type}
       id={id}
       name={name}
       placeholder={name}
       onChange={onChange}
    />
   
  )
}

export default Input