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
        } catch (err) {
          //console.log(err);
        }
        };

    const handleSignOut = async () => {
        try 
          {await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            } 
            catch (err) {
              //console.log(err);
            }
          };
    
    const clickHandler = async  () => {
      handleDelete();
      handleSignOut();
      history("/");
    }

  return (
    <Form onSubmit={clickHandler}>
          
      <Container className={styles.DeleteForm}>
        <h3>Do you really want to delete your profile?</h3>
        <h6><strong>!! </strong>This action cannot be undone and your profile will be gone forever
        <strong> !!</strong></h6>
      <br></br>
      <Button
        className={styles.ButtonProfile}
        onClick={() => history(-1)()}
      >
        cancel
      </Button>
      <Button className={styles.ButtonProfile} type="submit"
      onClick={clickHandler}>
        delete
      </Button>
      </Container>
    </Form>
  );
};

export default DeleteProfile;