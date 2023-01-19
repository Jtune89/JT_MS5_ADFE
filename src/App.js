import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import DeleteProfile from "./pages/profiles/DeleteProfile";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      <Routes>
            <Route path="/" element= 
              {<PostsPage message="No results found. Adjust the search word" />} />
            
            <Route path="/feed" element= 
              {<PostsPage message="No results found. Adjust the search word or follow a user" 
              filter={`owner__followed__owner__profile=${profile_id}&`} />} />
            
            <Route path="/liked" element= 
              {<PostsPage message="No results found. Adjust the search word or like a post" 
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />

            <Route path="/commented" element= 
              {<PostsPage message="No results found. Adjust the search word or like a post" 
              filter={`comment__owner__profile=${profile_id}&ordering=-comment__created_at&`} />} />

            <Route path="/activity" element= 
              {<PostsPage message="No comments on your posts" 
              filter={`owner__profile=${profile_id}&comment__owner__profile=${profile_id}&
              ordering=comment__created_at`} />} />

            <Route path="/posts/:id/edit" element={<PostEditForm />} />
            <Route path="/signin" element= {<SignInForm />} />
            <Route path="/register" element= {<SignUpForm />} />
            <Route path="/posts/create" element={<PostCreateForm />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/profiles/:id" element={<ProfilePage />} />
            <Route path="/profiles/:id/edit/username" element={<UsernameForm />} />
            <Route path="/profiles/:id/edit/password" element={<UserPasswordForm />} />
            <Route path="/profiles/:id/edit" element={<ProfileEditForm />} />
            <Route path="/profiles/:id/edit/delete" element={<DeleteProfile />} />
            <Route render={() => <NotFound />} />
          </Routes>
      </Container>
    </div>
  );
}

export default App;
