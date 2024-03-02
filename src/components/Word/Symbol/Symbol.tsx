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

  const isSymbol = enteredLetters[index];

  return (
    <>
      <div
        className={cn(
          styles.symbol,
          isSymbol
            ? isSymbol === symbol
              ? styles.symbol_underlining_right
              : styles.symbol_underlining_write
            : styles.symbol_underlining_right,
          (index === enteredLetters.length ||
            (enteredLetters.length === 0 && index === 0)) &&
            styles.symbol_pointer
        )}
      >
        {isSymbol === symbol
          ? symbol
          : enteredLetters.length > index
          ? symbol
          : "*"}
      </div>
    </>
  );
};

export default Symbol;
