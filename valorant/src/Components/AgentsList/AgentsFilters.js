import React from 'react'
import styles from './AgentsFilters.module.css'





const AgentsFilters = ({filterByName, filterBySkills}) => {


  return (
    <div className={styles.filtersCotainer}>
        <div>
            <input onChange={filterByName} placeholder='Pesquisar agentes'/>
        </div>
        <div className={styles.filters}>
                <select>
                    <option>Selecione uma Habilidade</option>
                    <option>Arma Branca</option>
                    <option>Arma Primaria</option>
                    <option>Arma Secundaria</option>
                    <option>Especial</option>
                </select>
                <select>
                    <option>Selecione um filtro</option>
                    <option>Maior que</option>
                    <option>Menor que</option>
                </select>
                <input placeholder="informe o valor do dano"/>
                <button>Filtrar</button>
        </div>
    </div>
  )
}

export default AgentsFilters