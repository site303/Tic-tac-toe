
import './App.css';
// import { useState } from'react';
import Board from './components/Board';
import RestartBtn from './components/RestartBtn';
import styles from './components/TicTacToe.module.css';

function App() {
  return (
    <div className={styles.Wrapper}>
  <Board />
  <RestartBtn />
  </div>
  );
}

export default App;
