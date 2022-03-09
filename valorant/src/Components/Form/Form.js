import React from "react";
import Button from "../Button/Button";
import Input from "./Input";
import Spray from "../../Assets/images/spray.png";
import styles from "./Form.module.css";

const Form = ({ onChange }) => {
  return (
      <section id="suport" className={styles.suportClass}>
        <div className={styles.suportContainer}>
          <div className={styles.suportBg}>
            <div className={styles.suportTitle}>
              <h2>Suporte</h2>
            </div>
            <div className={styles.supName}>
              <input
                id="formName"
                type="text"
                name="name"
                placeholder=" "
                className={styles.formNameClass}
              />
              <span className={styles.namePlaceholder}>Nome</span>
            </div>
            <div className={styles.supLastName}>
              <input
                className={`${styles.formLastName} ${styles.formLastNameClass}`}
                type="text"
                name="lastName"
                placeholder=" "
              />
              <span className={styles.lastNamePlaceholder}>Sobrenome</span>
            </div>
            <div className={styles.supMail}>
              <input
                type="email"
                id="formEmail"
                name="mail"
                placeholder=" "
                className={styles.formMailClass}
              />
              <span className={styles.emailPlaceholder}>E-mail</span>
            </div>
            <div className={styles.supNickName}>
              <input
                id="formNickName"
                type="text"
                name="nickName"
                placeholder=" "
                className={styles.formNickNameClass}
              />
              <span className={styles.nickNamePlaceholder}>Apelido de jogador</span>
            </div>
            <div className={styles.supSubject}>
              <input
                id="formSubjectId"
                type="text"
                name="subject"
                placeholder=" "
                className={styles.subjectClass}
              />
              <span className={styles.subjectPlaceholder}>Assunto</span>
            </div>
            <div className={styles.supTxt}>
              <textarea
                id="formTxtId"
                name="txtArea"
                className={`${styles.txtClass} ${styles.description}`}
                placeholder=" "
              ></textarea>
              <span className={styles.txtPlaceholder}>Descrição</span>
            </div>
            <div className={styles.supBtn}>
              <input
                id="formSendBtn"
                type="submit"
                name="btnSendSup"
                value="Enviar"
                className={styles.btnForm}
              />
            </div>
            <div className={styles.supImg}>
              <img src={Spray}/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Form;
