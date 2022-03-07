import React, { useState } from 'react'
import styles from './NewAgentModal.module.css'



const NewAgentModal = ({closeModalNewAgent}) => {

   


  return (
    <div className={styles.modalBack}>
      <div className={`${styles.modalContainer}`}>
        <p>Adicionar Agente</p>
        <div className={`${styles.modalGrid}`}>
          <div>
            <select>
              <option selected disabled>Selecione</option>
              <option>Duelista</option>
              <option>Controlador</option>
              <option>Iniciador</option>
              <option>Sentinela</option>
            </select>
            <h3>Arma Branca:</h3>
            <h3>Arma Primaria:</h3>
            <h3>Arma Secundaria:</h3>
            <h3>Especial:</h3>
          </div>
          <div>
            <div className={styles.inputValues}>
              <input placeholder="Descricao"/>
              <input placeholder="Dano da Arma Branca" />
              <input placeholder="Dano da Arma Primaria" />
              <input placeholder="Dano da Arma Secundaria" />
              <input placeholder="Dano do Especial" />
            </div>
          </div>
          <div>
            IMAGEM
            <div className={styles.buttons}>
              <button onClick={closeModalNewAgent}>Cancelar</button>
              <button onClick={() => closeModalNewAgent()}>Adicionar</button>
            </div>
          </div>
        </div>
        <span className={`${styles.modalXClose}`} onClick={closeModalNewAgent}>
          X
        </span>
      </div>
    </div>
  );
}

export default NewAgentModal