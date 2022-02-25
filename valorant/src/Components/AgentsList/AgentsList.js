import React from 'react'
import styles from './AgentList.module.css'
import { Link } from 'react-router-dom'
import Data, { agents } from '../Data/Index'
import {ReactComponent as VerTodos} from '../../Assets/images/caminho243.svg'


console.log(agents[2])
console.log(agents[10])



  const AgentsList = () => {

    return(
    <>
    <h1>AGENTES</h1>
    <div className={styles.container}>
      
      {agents.map((agent,index) => (
        <>
          <div key={agent.image} className={`${styles.agentCard} `}>
            <img src={require(`../../Assets/agents/${agent.image}`)}/>
            <p>{agent.name.toUpperCase()}</p>
          </div>
        </>
      ))} 
      <Link to="/agents"><div className={`${styles.agentCardSeeAll}`}>
      <VerTodos/><p>ver todos</p>
      </div></Link>
    </div> 
    </>
    )

  }


export default AgentsList



