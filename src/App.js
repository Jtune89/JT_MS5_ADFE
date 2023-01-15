import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      <Routes>
            <Route path="/" element= {<h1>Home Page</h1>} />
            <Route path="/signin" element= {<SignInForm />} />
            <Route path="/register" element= {<SignUpForm />} />
            <Route path="/posts/create" element={<PostCreateForm />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route render={() => <h3>Page not found</h3>} />
          </Routes>
      </Container>
    </div>
  );
}

export default App;
