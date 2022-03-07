import React from 'react'
import styles from './AgentList.module.css'
import { Link, Route } from 'react-router-dom'
import Data, { agents } from '../Data/Index'
import {ReactComponent as VerTodos} from '../../Assets/images/caminho243.svg'
import Modal from '../ModalAgents/Modal'
import Input from '../Form/Input'
import AgentsFilters from './AgentsFilters'
import { useLocation } from "react-router-dom"
import NewAgentModal from '../ModalAgents/NewAgentModal'



  const AgentsList = () => {


    let location = useLocation();
    location = location.pathname

    const [agentsList, setAgentsList] = React.useState(agents);

    const [agentModal, setAgentModal] = React.useState(null);
    
    const [agentIndex, setAgentIndex] = React.useState(null);
    const [skillType, setSkillType] = React.useState(null);
    const [aboveUnderFilter, setAboveUnderFilter] = React.useState(null);
    const [dmgValueFilter, setDmgValueFilter] = React.useState(null)

    const[newAgentModal, setNewAgentModal] = React.useState(false);
    const[newAgentDescription, setNewAgentDescription] = React.useState(null);





 
    function filterAgentsByName(event){
      var searchedName = event.target.value;
      if(searchedName.length > 0){
        setAgentsList(agents.filter(function(agent){
            return agent.name.toUpperCase().match(searchedName.toUpperCase());
          }))
      } else {
        return setAgentsList(agents);
      }
    }

    const takeSkillValue = (e) => setSkillType(e.target.value)
    const takeAboveUnderValue = (e) => setAboveUnderFilter(e.target.value)
    const takeDmgValue = (e) => setDmgValueFilter(Number(e.target.value))

    function filterAgentsBySkill(){

       let typeIndex = null;
       let aboveOrUnder = null;

       switch (skillType) {
        case "primary":
          typeIndex = 0;
          break;
        case "secondary":
          typeIndex = 1;
          break;
        case "melee":
          typeIndex = 2;
          break;
        case "special":
          typeIndex = 3;
          break;
        default:
          alert("Especifique uma habilidade para ser filtrada.");
          return;
          break;
      }
      switch (aboveUnderFilter) {
        case "above":
          aboveOrUnder = true;
          break;
        case "under":
          aboveOrUnder = false;
          break;
        default:
          alert("especifique o corte de filtro.");
          return;
          break;
      }

      let filteredAgents = agents.filter(function (agent) {
        console.log(agent.skills[typeIndex].damage);
        if (aboveOrUnder) {
          return agent.skills[typeIndex].damage > dmgValueFilter;
        } else {
          return agent.skills[typeIndex].damage < dmgValueFilter;
        }
      });
      setAgentsList(filteredAgents);
    }


    

    function addNewAgent(){

    }



    function removeAgent(){
      let i = agentIndex
      agents.splice(i,1)
  }






    return(
    <>
      <div className={styles.tittle}>
        <h1>AGENTES</h1>
      </div>
      {location === '/agents' && <AgentsFilters filterByName={filterAgentsByName} onChangeSkillValue={takeSkillValue} onChangeAboveUnderValue={takeAboveUnderValue} onChangeDmgValue={takeDmgValue} onSubimitFilters={filterAgentsBySkill}/>}
      <div className={styles.container}> 
      {location === '/agents' && <div className={styles.addNewAgentCard} onClick={() => setNewAgentModal(true)}>
          <p>Adicionar</p>
        </div>}
        {agentsList.map((agent,index) => (
            <div onClick={() => { setAgentModal(agent); setAgentIndex(index)}} key={index} className={`${styles.agentCard} `}>
              <img className={styles.agentImg} src={require(`../../Assets/agents/${agent.image}`)}/>
              <p>{agent.name.toUpperCase()}</p>
            </div>
        ))} 
        {location === '/' && <Link to="/agents"><div className={`${styles.agentCardSeeAll}`}>
        <VerTodos/><p>ver todos</p>
        </div></Link>}
        {agentModal && (<Modal closeModal={() => setAgentModal(null)} selectedAgent={agentModal} removeAgent={removeAgent}/>)}
        {location === '/agents' && newAgentModal && <NewAgentModal closeModalNewAgent={() => setNewAgentModal(false)}/>}
      </div> 
    </>
    )
    
  }


export default AgentsList



