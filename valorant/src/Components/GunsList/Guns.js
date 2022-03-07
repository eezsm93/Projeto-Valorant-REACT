import React from "react";
import Img from "../../Assets/images/V_AGENTS_587x900_Cypher.png";
import styles from "./Guns.module.css";
import Data, { guns, agents, maps } from "../Data/Index";
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
            <ArrowLeft />
            {guns.primaryGun.map((gun, index) => (
              <div key={index}>
                <img src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight />
          </div>
          <p>Arma Secundaria</p>
          <div className={styles.secondaryGunsContainer}>
            <ArrowLeft />
            {guns.secondaryGun.map((gun, index) => (
              <div key={index}>
                <img src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight />
          </div>
          <p>Arma Branca</p>
          <div className={styles.steelGunsContainer}>
            <ArrowLeft />
            {guns.steel.map((gun, index) => (
              <div key={index}>
                <img src={require(`../../Assets/guns/${gun}`)} />
              </div>
            ))}
            <ArrowRight/>
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
