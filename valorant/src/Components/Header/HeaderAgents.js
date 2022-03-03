import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderAgents.module.css'
import Button from '../../Components/Button/Button'
import {ReactComponent as Logo} from '../../Assets/Logo.svg'
import Valorant from '../../Assets/images/valorant.png'


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <Link className={styles.logo} to="/" aria-label="Home"><Logo/></Link>
          <div className={styles.navlinks}>
            <Link to="/agents">Agentes</Link>
            <Link to="/maps">Mapas</Link>
            <Link to="/Arsenal">Arsenal</Link>
            <Link to="/download">Download</Link>
            <Link to="/suport">Suporte</Link>
          </div>
          <Link to="/playNow"><Button>Jogue Agora</Button></Link>
      </nav>
          <img className={styles.valorant} src={Valorant} alt="Valorant" />"
    </header>
  )
}

export default Header