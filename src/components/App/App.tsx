import styles from "./app.module.css";
import Keyboard from "../Keyboard/Keyboard";
import ControlPanel from "../ControlPanel/ControlPanel";
import Drawing from "../Drawing/Drawing";
import Word from "../Word/Word";

function App() {
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
