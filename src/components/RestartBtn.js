import React from "react";
import restartImg from "../icons/restart.png";
import styles from "./TicTacToe.module.css";

export default function RestartBtn({ handleClear }) {
  return (
    <button className={styles.restartBtn} onClick={() => handleClear()}>
      <img src={restartImg} class={styles.restartImg} alt="restart"/>
    </button>
  );
}
