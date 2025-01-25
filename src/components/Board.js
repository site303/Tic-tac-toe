import Square from "./Square";
import styles from "./TicTacToe.module.css";
import { useState } from "react";
import RestartBtn from "./RestartBtn";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Ходит X");
  // комментарий: кликать на уже нажатую клетку нельзя || если игрок уже выиграл, больше нажимать на кнопку нельзя
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // комментарий: потом посмотреть, можно ли деструктор
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    // Передаем обновленные данные
    const newStatus = getStatus(nextSquares, !xIsNext);
    // Устанавливаем новый статус
    setStatus(newStatus);
  }
    // обнуление ячеек 
    function handleClear() {
      const filledBoard = squares.every((square) => square !== null); // Проверяем, заполнены ли все клетки
      const hasMoves = squares.some((square) => square !== null); // Проверяем, были ли сделаны ходы
    
      // Условие: сброс выполняется только если все ячейки заполнены или начались ходы
      if (filledBoard || hasMoves) {
        setSquares(Array(9).fill(null)); // Сбрасываем игровое поле
        setXIsNext(true); // Сбрасываем ход текущего игрока
        setStatus("Ходит X"); // Сбрасываем статус игры
      }
  }

  // функция на определение победителя
  function getStatus(squares, xIsNext) {
    const winner = calculateWinner(squares);

    // Если есть победитель, возвращаем сообщение о завершении игры
    if (winner) {
      return "Игра окончена, победил " + winner + "!";
    }

    // если нет пустых клеток и нет победителя
    const filledBoard = squares.every((square) => square !== null);
    if (filledBoard) {
      return "Игра окончена, ничья!";
    }
  
    // Если ход еще не был сделан, выводим сообщение о первом игроке
    //   square !== null - ячейка НЕ пустая
    const hasMoves = squares.some((square) => square !== null);
    if (!hasMoves) {
      return "Ходит X";
    }

    // Если игра продолжается, выводим текущего игрока
    return "Ходит " + (xIsNext ? "X" : "O");
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.status}>{status}</div>
      <div className={styles.row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className={styles.row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className={styles.row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <RestartBtn handleClear={handleClear}>
        Restart
      </RestartBtn>
      
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Проходим по всем возможным выигрышным комбинациям
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Извлекаем индексы текущей комбинации

    // Проверяем, есть ли значения и равны ли они в текущей комбинации
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Возвращаем победителя
    }
  }

  // Если нет победителя, возвращаем null
  return null;
}
