import React from 'react'
import styles from './AgentList.module.css'
import { Link } from 'react-router-dom'
import Data, { agents } from '../Data/Index'
import {ReactComponent as VerTodos} from '../../Assets/images/caminho243.svg'
import Modal from '../ModalAgents/Modal'


  const AgentsList = () => {

    const [agentsList, setAgentsList] = React.useState(agents);
    const [agentModal, setAgentModal] = React.useState(null); 




    return(
    <>
    <h1>AGENTES</h1>
    <div className={styles.container}>
      
      {agents.map((agent,index) => (
        <>
          <div onClick={() => setAgentModal(agent)} key={agent.image} className={`${styles.agentCard} `}>
            <img src={require(`../../Assets/agents/${agent.image}`)}/>
            <p>{agent.name.toUpperCase()}</p>
          </div>
        </>
      ))} 
      <Link to="/agents"><div className={`${styles.agentCardSeeAll}`}>
      <VerTodos/><p>ver todos</p>
      </div></Link>
      {agentModal && (<Modal closeModal={() => setAgentModal(null)} selectedAgent={agentModal}/>)}{console.log(agentModal)}
     
    </div> 
    </>
    )
    
  }


export default AgentsList



