import React from 'react'
import Img from '../../Assets/images/V_AGENTS_587x900_Cypher.png'
import styles from './Guns.module.css'

const Guns = () => {
  return (
    <section className="containerHome">
        <div className={styles.gunsContainer}>
            <div>
                <h1>Escolha sua Arma</h1>
                <p>Arma Primaria</p>
                {/* <PrimaryGuns/> */}
                <p>Arma Secundaria</p>
                {/* <SecondaryGuns/> */}
                <p>Arma Branca</p>
                {/* <SteelGuns/> */}
            </div>
            <div>
                <img src={Img}/>
            </div>
        </div>
    </section>
  )
}

export default Guns