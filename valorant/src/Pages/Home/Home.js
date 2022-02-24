import React from 'react'
import AgentsList from '../../Components/AgentsList/AgentsList'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Download from '../../Components/Download/Download'
import Guns from '../../Components/GunsList/Guns'
import Form from '../../Components/Form/Form'

const Home = () => {
  return (
    <>
      <Header />
      <AgentsList/>
      {/* <Maps/> */}
      <Guns/>
      <Download/>
      <Form/>
      <Footer />
    </>
  )
}

export default Home