import React from 'react'
import styles from './ModalAgents.module.css'

const Modal = ({closeModal, selectedAgent, allAgents, removeAgent}) => {

        
  return (
    <div className={`${styles.modalBack}`}>  
        <div className={`${styles.modalContainer}`}>
            <div className={`${styles.modalLeft}`}>
                <h3>Função</h3>
                <h1>{selectedAgent.function}</h1>
                <p>{selectedAgent.description}</p>
                <h3>Habilidades</h3>
                <div className={`${styles.habilit}`}>
                    <p>Arma Branca: {selectedAgent.skills[0].damage} Dano</p>
                    <p>Arma Primaria: {selectedAgent.skills[1].damage} Dano</p>
                    <p>Arma Secundaria:  {selectedAgent.skills[2].damage} Dano</p>
                    <p>Especial: {selectedAgent.skills[3].damage} Dano</p>
                    <button onClick={closeModal}>Fechar</button>
                    <button onClick={() => {removeAgent() ; closeModal() }}>Deletar</button>
                </div>
                <span className={`${styles.modalXClose}`} onClick={closeModal}>X</span>
            </div>
            <div className={`${styles.modalRight}`}>
                <img src={require(`../../Assets/agents/${selectedAgent.image}`)}/>
            </div>
        </div>
    </div>
  )
}

export default Modal