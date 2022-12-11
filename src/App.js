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
            <Route path="/" element= {<h1>Home Page</h1>} />
            <Route path="/about" element= {<h1>About</h1>} />
            <Route path="/signin" element= {<h1>Sign In</h1>} />
            <Route path="/register" element= {<h1>Register</h1>} />
            <Route render={() => <h3>Page not found</h3>} />
          </Routes>
      </Container>
    </div>
  );
}

export default App;
