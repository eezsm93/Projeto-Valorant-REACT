import React from 'react'
import Button from '../Button/Button'
import Img from '../../Assets/images/klmpanzmgkca8ojxdpcd.png'
import styles from './Download.module.css'
import {ReactComponent as PersonIcon} from '../../Assets/images/Caminho 250.svg'
import {ReactComponent as CartIcon} from '../../Assets/images/Caminho 246.svg'
import {ReactComponent as TrofIcon} from '../../Assets/images/Caminho 247.svg'

const Download = () => {
  return (
    <section>
        <div className={styles.containerDownload}>
          <div className={styles.downloadLeft}>
            <div>
                <h1>Baixe o Jogo</h1>
                 <p> <PersonIcon/> Jogue com os seus amigos</p>
                 <p> <CartIcon/> Compre itens digitais</p>
                 <p> <TrofIcon/>Torneios independentes</p> 
            </div>
            <div className={styles.downloadButton}>
                  <Button>Download</Button>
            </div>
          </div>
          <div>
            <img src={Img}/>
          </div>
        </div>
    </section>
  )
}

export default Download