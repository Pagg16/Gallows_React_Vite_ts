import React from "react";
import styles from "./drawing.module.css";

const Drawing: React.FC = (): JSX.Element => {
  return (
    <div className={styles.drawing}>
      <div className={styles.drawingVerticalPanel}>
        <div className={styles.drawingTopPanel}>
          <div className={styles.drawingRightPanel}>
            <div className={styles.head}>
              <div className={styles.body}>
                <div className={styles.handRight}></div>
                <div className={styles.handLeft}></div>
                <div className={styles.legRight}></div>
                <div className={styles.legLeft}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.drawingBottomPanel}></div>
    </div>
  );
};

export default Drawing;
