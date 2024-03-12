import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Description } from "./components/Description/Description";
import { Technologies } from "./components/Techs/Technologies";
import {Projects} from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Description />
      <Technologies/>
      <Projects />
    </div>
  );
}

export default App;
