import Square from './Square';
import styles from './TicTacToe.module.css';

export default function Board() {
  return (
    <>
    <div className={styles.row}>
    <Square />
    <Square />
    <Square />
    </div>

     <div className={styles.row}>
     <Square />
     <Square />
     <Square />
     </div>

      <div className={styles.row}>
      <Square />
      <Square />
      <Square />
      </div>
      </>
  )

}