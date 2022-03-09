import React from 'react'
import styles from './AgentList.module.css'
import { Link, Route } from 'react-router-dom'
import { agents, myData} from '../Data/Index'
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
    const[agentFunction, setAgentFunction] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [stellDmg, setStellDmg] = React.useState(null);
    const [primaryDmg, setPrimaryDmg] = React.useState(null);
    const [secondaryDmg, setSecondaryDmg] = React.useState(null);
    const [specialDmg, setSpecialDmg] = React.useState(null);


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
        if (aboveOrUnder) {
          return agent.skills[typeIndex].damage > dmgValueFilter;
        } else {
          return agent.skills[typeIndex].damage < dmgValueFilter;
        }
      });
      setAgentsList(filteredAgents);
    }

    const takeAgentFunction = (e) => setAgentFunction(e.target.value)
    const takeName = (e) => setName(e.target.value)
    const takeDescription = (e) => setDescription(e.target.value)
    const takeStellDmg = (e) => setStellDmg(Number(e.target.value))
    const takePrimaryDmg = (e) => setPrimaryDmg(Number(e.target.value))
    const takeSecondaryDmg = (e) => setSecondaryDmg(Number(e.target.value))
    const takeSpecialDmg = (e) => setSpecialDmg(Number(e.target.value))


    function addNewAgent(){
      let newAgent = {
        name: name,
        function: agentFunction,
        description: description,
        skills: [
          {
            type: 1,
            damage: stellDmg,
          },
          {
            type: 2,
            damage: primaryDmg,
          },
          {
            type: 3,
            damage: secondaryDmg,
          },
          {
            type: 4,
            damage: specialDmg,
          },
        ],
        image: "cypher.png",
      };

      myData.data.agents.push(newAgent);
      setAgentsList(myData.data.agents);
    }

    function clearModalNewAgent(){
      setAgentFunction(null);
      setName(null);
      setDescription(null);
      setStellDmg(null);
      setPrimaryDmg(null);
      setSecondaryDmg(null);
      setSpecialDmg(null);
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
              <img alt="agentes" className={styles.agentImg} src={require(`../../Assets/agents/${agent.image}`)}/>
              <p>{agent.name.toUpperCase()}</p>
            </div>
        ))} 
        {location === '/' && <Link to="/agents"><div className={`${styles.agentCardSeeAll}`}>
        <VerTodos/><p>ver todos</p>
        </div></Link>}
        {agentModal && (<Modal closeModal={() => setAgentModal(null)} selectedAgent={agentModal} removeAgent={removeAgent}/>)}
        {location === '/agents' && newAgentModal &&
         <NewAgentModal
            clear={clearModalNewAgent}
            addNewAgent={addNewAgent}
            closeModalNewAgent={() => setNewAgentModal(false)}
            agentFunction={agentFunction} takeAgentFunction={takeAgentFunction}
            name={name} takeName={takeName}
            description={description} takeDescription={takeDescription}
            stellDmg={stellDmg} takeStellDmg={takeStellDmg}
            primaryDmg={primaryDmg} takePrimaryDmg={takePrimaryDmg}
            secondaryDmg={secondaryDmg} takeSecondaryDmg={takeSecondaryDmg}
            specialDmg={specialDmg} takeSpecialDmg={takeSpecialDmg}
          />}
      </div> 
    </>
    )
    
  }


export default AgentsList



