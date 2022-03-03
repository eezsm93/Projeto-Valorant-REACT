import React from 'react'
import Button from '../Button/Button'
import Img from '../../Assets/images/klmpanzmgkca8ojxdpcd.png'
import styles from './Download.module.css'

const Download = () => {
  return (
    <section>
        <div className={styles.containerDownload}>
          <div className={styles.downloadLeft}>
            <div>
                <h1>Baixe o Jogo</h1>
                <p>Jogue com os seus amigos</p>
                <p>Compre itens digitais</p>
                <p>Torneios independentes</p> 
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