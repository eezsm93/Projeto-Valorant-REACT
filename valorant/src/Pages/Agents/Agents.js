import React from 'react'
import AgentsList from '../../Components/AgentsList/AgentsList'
import Header from '../../Components/Header/Header'
import styles from './Agents.module.css'


const Agents = () => {
  return (
    <div className={styles.agentsPageBg}>
      <Header/>
      <AgentsList/>
    </div>
  )
}

export default Agents