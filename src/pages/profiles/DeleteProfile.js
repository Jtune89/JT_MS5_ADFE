import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { axiosRes } from "../../api/axiosDefaults";
import axios from "axios";
import {
    useCurrentUser,
    useSetCurrentUser
  } from "../../contexts/CurrentUserContext";
import styles from "../../styles/DeleteProfile.module.css";

const DeleteProfile = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const history = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        if (currentUser?.profile_id?.toString() === id)
        try {
        await axiosRes.delete(`/profiles/${id}/`); 
        history("/");
        } catch (err) {
        console.log(err);
        }
        };
    
    const handleSignOut = async () => {
        try 
          {await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            history("/");
            } 
            catch (err) {
              console.log(err);
            }
          };

  return (
    <Form onSubmit={handleSignOut}>
          
      <Container className={styles.DeleteForm} onSubmit={handleSignOut}>
        <h3>Do you really want to delete your profile?</h3>
        <h6>This action cannot be undone and your profile will be gone forever</h6>
      <br></br>
      <Button
        className={styles.ButtonProfile}
        onClick={() => history(-1)()}
      >
        cancel
      </Button>
      <Button className={styles.ButtonProfile} type="submit"
      onClick={handleDelete}>
        delete
      </Button>
      </Container>
    </Form>
  );
};

export default DeleteProfile;