
import './App.css';
// import { useState } from'react';
import Board from './components/Board';
import styles from './components/TicTacToe.module.css';


function App() {
  return (
    <div className={styles.Wrapper}>
      <Board />
    </div>
  );
}

export default App;
