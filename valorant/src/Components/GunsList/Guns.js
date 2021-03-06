import React from "react";
import Img from "../../Assets/images/V_AGENTS_587x900_Cypher.png";
import styles from "./Guns.module.css";
import { guns } from "../Data/Index";
import { ReactComponent as ArrowLeft } from "../../Assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../Assets/images/arrowRight.svg";
import { ReactComponent as Target } from "../../Assets/images/target.svg";

const Guns = () => {
  return (
    <section className={styles.background}>
      <div className={styles.gunsContainer}>
        <div className={styles.guns}>
          <div className={styles.tittleContainer}>
            <h1>Escolha sua Arma</h1>
            <Target />
          </div>
          <p>Arma Primaria</p>
          <div className={styles.primaryGunsContainer}>
            <ArrowLeft className={styles.arrowLeft}/>
            {guns.primaryGun.map((gun, index) => (
              <div key={index}>
                <img alt="armas primarias" src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight className={styles.arrowRight} />
          </div>
          <p>Arma Secundaria</p>
          <div className={styles.secondaryGunsContainer}>
            <ArrowLeft className={styles.arrowLeft} />
            {guns.secondaryGun.map((gun, index) => (
              <div key={index}>
                <img alt="armas secondarias" src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight className={styles.arrowRight} />
          </div>
          <p>Arma Branca</p>
          <div className={styles.steelGunsContainer}>
            <ArrowLeft className={styles.arrowLeft} />
            {guns.steel.map((gun, index) => (
              <div key={index}>
                <img alt="armas brancas" src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight className={styles.arrowRight}/>
          </div>
        </div>
        <div>
          <img src={Img} />
        </div>
      </div>
    </section>
  );
};

export default Guns;
