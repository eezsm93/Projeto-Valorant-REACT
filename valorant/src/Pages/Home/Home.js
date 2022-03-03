import React from 'react'
import AgentsList from '../../Components/AgentsList/AgentsList'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Download from '../../Components/Download/Download'
import Guns from '../../Components/GunsList/Guns'
import Form from '../../Components/Form/Form'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.headerBackgroundHome}>
        <Header />
      </div>
      <div className={styles.agentBackgroundHome}>
        <AgentsList />
      </div>
      <div className={styles.BackgroundHome}>
        {/* <Maps/> */}
        <Guns/>
        <Download/>
        <Form/>
      </div>
    </>
  )
}

export default Home