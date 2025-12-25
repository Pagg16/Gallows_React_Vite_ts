import React from "react";
import styles from "./controlPanel.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addGuessWord } from "../../store/appSlice";
import { getRandomWord } from "../../utils/getRandomWord";

const ControlPanel: React.FC = (): JSX.Element => {
  const guessedСharacters = useAppSelector(
    (state) => state.app.guessedСharacters
  );
  const guessedWords = useAppSelector((state) => state.app.guessedWords);

  const dispatch = useAppDispatch();

  function restartGame() {
    dispatch(addGuessWord(getRandomWord()));
  }

  return (
    <div className={styles.controlPanel}>
      <div>
        <button
          onClick={restartGame}
          className={styles.controlPanel__restartButton}
        >
          restart word
        </button>
      </div>
      <div className={styles.controlPanel__numberBlock}>
        <div className={styles.controlPanel__numberWordSymbol}>
          Количество угаданных символов{" "}
          <span className={styles.controlPanel__number}>
            {guessedСharacters}
          </span>
        </div>
        <div className={styles.controlPanel__numberWordSymbol}>
          Количество угаданных слов{" "}
          <span className={styles.controlPanel__number}>{guessedWords}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
