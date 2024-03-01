import React, { useEffect } from "react";
import styles from "./word.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { words } from "../../constants/wordList.json";
import { addGuessWord } from "../../store/appSlice";
import Symbol from "./Symbol/Symbol";

const Word: React.FC = (): JSX.Element => {
  const word = useAppSelector((state) => state.app.guessWord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      addGuessWord(words[Math.floor(Math.random() * (words.length - 1))])
    );
  }, []);

  return (
    <div className={styles.word}>
      {word.length > 0 &&
        word
          .split("")
          .map((symbol, index) => (
            <Symbol key={index} symbol={symbol} index={index} />
          ))}
    </div>
  );
};

export default Word;
