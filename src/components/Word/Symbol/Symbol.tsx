import React from "react";
import styles from "./symbol.module.css";
import cn from "classnames";
import { useAppSelector } from "../../../hooks/hooks";

interface SymbolProps {
  symbol: string;
  index: number;
}

const Symbol: React.FC<SymbolProps> = ({ symbol, index }): JSX.Element => {
  const enteredLetters = useAppSelector((state) => state.app.enteredLetters);
  console.log(symbol);

  const isGuess = enteredLetters[index]
    ? enteredLetters[index] === symbol
      ? true
      : false
    : false;

  return (
    <>
      <div
        className={cn(
          styles.symbol,
          isGuess
            ? styles.symbol_underlining_write
            : styles.symbol_underlining_right
        )}
      >
        {isGuess ? "*" : symbol}
      </div>
    </>
  );
};

export default Symbol;
