import React from 'react'
import styles from './ModalAgents.module.css'

const Modal = ({closeModal, selectedAgent}) => {
  return (
    <div className={`${styles.modal}`}>
        <div>
            <p>Nome: {selectedAgent.name}</p>
            <p>Descricao: {selectedAgent.description}</p>
            <p>Habilidade 1: {selectedAgent.description}</p>
            <p>Habilidade 1:</p>
            <p>Habilidade 1:</p>
            <p>Habilidade 1:</p>
            <button onClick={closeModal}>X</button>
        </div>
        <div>
            <img src={require(`../../Assets/agents/${selectedAgent.image}`)}/>
        </div>
    </div>
  )
}

export default Modal