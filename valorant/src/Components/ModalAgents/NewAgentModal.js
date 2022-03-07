
import styles from './NewAgentModal.module.css'



const NewAgentModal = ({
  clear, 
  addNewAgent,
  closeModalNewAgent,
  agentFunction, takeAgentFunction,
  takeName, name,
  takeDescription, description,
  takeStellDmg, stellDmg,
  takePrimaryDmg, primaryDmg,
  takeSecondaryDmg, secondaryDmg,
  takeSpecialDmg, specialDmg}) => {

  return (
    <div className={styles.modalBack}>
      <div className={`${styles.modalContainer}`}>
        <p>Adicionar Agente</p>
        <div className={`${styles.modalGrid}`}>
          <div>
            <select id="agentFunction" name="agentFunction" value={agentFunction} onChange={takeAgentFunction}>
              <option value="Selecione" selected disabled>Selecione</option>
              <option value="Duelista">Duelista</option>
              <option value="Controlador">Controlador</option>
              <option value="Iniciador">Iniciador</option>
              <option value="Sentinela">Sentinela</option>
            </select>
            <input id="name" type="text" name="name"value={name} onChange={takeName} placeholder="Nome do Agente"/>
            <h3>Arma Branca:</h3>
            <h3>Arma Primaria:</h3>
            <h3>Arma Secundaria:</h3>
            <h3>Especial:</h3>
            {agentFunction}<br/>
            {name}<br/>
            {description}<br/>
            {stellDmg}<br/>
            {primaryDmg}<br/>
            {secondaryDmg}<br/>
            {specialDmg}<br/>
          </div>
          <div>
            <div className={styles.inputValues}>
              <input id="description" type="text" name="description" value={description} onChange={takeDescription} placeholder="Descricao"/>
              <input id="stellDmg" type="number" name="stellDmg" value={stellDmg} onChange={takeStellDmg}placeholder="Dano da Arma Branca" />
              <input id="primaryDmg" type="number" name="primaryDmg" value={primaryDmg} onChange={takePrimaryDmg} placeholder="Dano da Arma Primaria" />
              <input id="secondaryDmg" type="number" name="secondaryDmg" value={secondaryDmg} onChange={takeSecondaryDmg} placeholder="Dano da Arma Secundaria" />
              <input id="specialDmg" type="number" name="specialDmg" value={specialDmg} onChange={takeSpecialDmg} placeholder="Dano do Especial" />
            </div>
          </div>
          <div>
            IMAGEM
            <div className={styles.buttons}>
              <button onClick={() => {closeModalNewAgent() ; clear()}}>Cancelar</button>
              <button onClick={() => {addNewAgent() ; closeModalNewAgent() ; clear()}}>Adicionar</button>
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