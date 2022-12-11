import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
          <Route exact path="/about" render={() => <h1>Sign In</h1>} />
          <Route exact path="/about" render={() => <h1>Register</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
