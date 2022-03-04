import React from 'react'
import styles from './AgentsFilters.module.css'


const AgentsFilters = ({filterByName, onChangeSkillValue, onChangeAboveUnderValue, onChangeDmgValue, onSubimitFilters}) => {


  return (
    <div className={styles.filtersCotainer}>
        <div>
            <input onChange={filterByName} placeholder='Pesquisar agentes'/>
        </div>
        <div className={styles.filters}>
                <select onChange={onChangeSkillValue}>
                    <option selected disabled>Selecione uma Habilidade</option>
                    <option value="primary">Arma Branca</option>
                    <option value="secondary">Arma Primaria</option>
                    <option value="melee">Arma Secundaria</option>
                    <option value="special">Especial</option>
                </select>
                <select onChange={onChangeAboveUnderValue}>
                    <option selected disabled >Selecione um filtro</option>
                    <option value="above">Maior que</option>
                    <option value="under">Menor que</option>
                </select>
                <input onChange={onChangeDmgValue}placeholder="informe o valor do dano"/>
                <button onClick={onSubimitFilters}>Filtrar</button>
        </div>
    </div>
  )
}

export default AgentsFilters