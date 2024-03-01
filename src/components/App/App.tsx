import { useState } from "react";
import { words } from "../../constants/wordList.json";
import styles from "./app.module.css";
import Keyboard from "../Keyboard/Keyboard";
import ControlPanel from "../ControlPanel/ControlPanel";
import Drawing from "../Drawing/Drawing";
import Word from "../Word/Word";

function App() {
  const [wordGuessing, setWordGuessing] = useState<string>(
    () => words[Math.floor(Math.random() * words.length - 1)]
  );

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className={styles.app}>
      <ControlPanel />
      <Drawing />
      <Word />
      <Keyboard />
    </div>
  );
}

export default App;
