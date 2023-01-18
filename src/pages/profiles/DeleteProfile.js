import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { axiosRes } from "../../api/axiosDefaults";
import axios from "axios";
import {
    useCurrentUser,
    useSetCurrentUser
  } from "../../contexts/CurrentUserContext";
import styles from "../../styles/DeleteProfile.module.css";
import appStyles from "../../App.module.css";

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
            try {
              await axios.post("dj-rest-auth/logout/");
              setCurrentUser(null);
              history("/");
            } catch (err) {
              console.log(err);
            }
          };

  const textFields = (
    <>
      <Form.Group onSubmit={handleSignOut}>
        <Form.Label>Do you really want to delete your profile?</Form.Label>
      

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
      </Form.Group>
    </>
  );

  return (
    <Form onSubmit={handleSignOut}>
      <Row>

        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default DeleteProfile;