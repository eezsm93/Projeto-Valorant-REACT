import React from 'react'
import styles from './AgentList.module.css'
import { Link } from 'react-router-dom'
import Data, { agents } from '../Data/Index'
import {ReactComponent as VerTodos} from '../../Assets/images/caminho243.svg'
import Modal from '../ModalAgents/Modal'
import Input from '../Form/Input'
import AgentsFilters from './AgentsFilters'



  const AgentsList = () => {

    const [agentsList, setAgentsList] = React.useState(agents);
    const [agentModal, setAgentModal] = React.useState(null); 

    function filterAgentsByName(event) {
      var searchedName = event.target.value;
      if(searchedName.length > 0){
        setAgentsList(agents.filter(function(agent){
            return agent.name.toUpperCase().match(searchedName.toUpperCase());
          }))
      } else {
        return setAgentsList(agents);
      }
    }

    function filterAgentsBySkills(event){
      event.preventDefault();

      

    }


    return(
    <>
    <h1>AGENTES</h1>
    <AgentsFilters filterByName={filterAgentsByName} filterBySkills={filterAgentsBySkills}/>
    <div className={styles.container}> 
      {agentsList.map((agent,index) => (
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
      {agentModal && (<Modal allAgents={agents} closeModal={() => setAgentModal(null)} selectedAgent={agentModal}/>)}
    </div> 
    </>
    )
    
  }


export default AgentsList



