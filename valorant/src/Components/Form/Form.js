import React from 'react'
import Button from '../Button/Button'
import Input from './Input'
import Img from '../../Assets/images/valorant-collectible-variable-removed-spray.png'
import styles from './Form.module.css'

const Form = () => {
  return (
    <section>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <Input type="text" id="name" name="Nome"/>
                <Input type="email" id="email" name="Email"/>
                <Input type="password" id="password" name="Senha"/>
                <Input type="text" id="problem" name="problema"/>
                <Button>Enviar</Button>
            </form>
            <div>
                <img src={Img}/>
            </div>
        </div>
    </section>
  )
}

export default Form