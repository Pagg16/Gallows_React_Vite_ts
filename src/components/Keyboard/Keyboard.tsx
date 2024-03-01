import React from "react";
import styles from "./keyboard.module.css";

const Keyboard: React.FC = (): JSX.Element => {
  const handleKeyPress = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedKey = e.currentTarget.innerText;
    console.log(clickedKey);
  };
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboard__string}>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          й
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ц
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          у
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          к
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          е
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          н
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          г
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ш
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          щ
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          з
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          х
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ъ
        </div>
      </div>
      <div className={styles.keyboard__string}>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ф
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ы
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          в
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          а
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          п
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          р
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          о
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          л
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          д
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ж
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          э
        </div>
      </div>
      <div className={styles.keyboard__string}>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          я
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ч
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          с
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          м
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          и
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          т
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ь
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          б
        </div>
        <div onClick={handleKeyPress} className={styles.keyboard__key}>
          ю
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
