import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../../Components/Button/Button'
import {ReactComponent as Logo} from '../../Assets/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <Link className={styles.logo} to="/" aria-label="Home"><Logo/></Link>
          <Link to="/agents">Agentes</Link>
          <Link to="/maps">Mapas</Link>
          <Link to="/Arsenal">Arsenal</Link>
          <Link to="/download">Download</Link>
          <Link to="/suport">Suporte</Link>
          <Link to="/playNow"><Button>Jogue Agora</Button></Link>
      </nav>
    </header>
  )
}

export default Header