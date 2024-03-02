import React from "react";
import styles from "./word.module.css";
import { useAppSelector } from "../../hooks/hooks";
import Symbol from "./Symbol/Symbol";

const Word: React.FC = (): JSX.Element => {
  const word = useAppSelector((state) => state.app.guessWord);

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
