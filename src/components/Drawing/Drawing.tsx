import React, { useEffect, useState } from "react";
import styles from "./drawing.module.css";
import { useAppSelector } from "../../hooks/hooks";

const Drawing: React.FC = (): JSX.Element => {
  const word = useAppSelector((state) => state.app.guessWord);
  const enteredLetters = useAppSelector((state) => state.app.enteredLetters);

  const [isDraving, setIsDraving] = useState<Record<string, boolean>>({
    head: false,
    body: false,
    handRight: false,
    handLeft: false,
    legRight: false,
    legLeft: false,
  });

  function convertRange(x: number): number {
    const scale = (Object.keys(isDraving).length - 0) / (word.length - 0);
    return (x - 0) * scale + 0;
  }

  function numberCoincidences(): number {
    let num = 0;

    for (let i = 0; i < enteredLetters.length; i++) {
      if (word[i] !== enteredLetters[i]) {
        num++;
      }
    }
    return num;
  }

  useEffect(() => {
    if (!word || enteredLetters.length === 0) {
      return;
    }

    const obJresult: Record<string, boolean> = {};
    const num = Math.round(convertRange(numberCoincidences()));
    let currentNum = 0;
    for (const key in isDraving) {
      if (currentNum === num) break;
      obJresult[key] = true;
      currentNum++;
    }
    setIsDraving((prevState) => ({ ...prevState, ...obJresult }));
  }, [enteredLetters]);

  useEffect(() => {
    setIsDraving((state) => {
      const obj: Record<string, boolean> = {};
      for (const key in state) {
        obj[key] = false;
      }
      return obj;
    });
  }, [word]);

  return (
    <div className={styles.drawing}>
      <div className={styles.drawingVerticalPanel}>
        <div className={styles.drawingTopPanel}>
          <div className={styles.drawingRightPanel}>
            {isDraving.head && (
              <div className={styles.head}>
                {isDraving.body && (
                  <div className={styles.body}>
                    {isDraving.handRight && (
                      <div className={styles.handRight}></div>
                    )}
                    {isDraving.handLeft && (
                      <div className={styles.handLeft}></div>
                    )}
                    {isDraving.legRight && (
                      <div className={styles.legRight}></div>
                    )}
                    {isDraving.legLeft && (
                      <div className={styles.legLeft}></div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.drawingBottomPanel}></div>
    </div>
  );
};

export default Drawing;
