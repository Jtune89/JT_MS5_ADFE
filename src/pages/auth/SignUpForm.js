import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

    <form>
        <div class="form-floating mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="floatingInput" aria-describedby="username" />
        </div>
        <div class="form-floating mb-3">
        <label for="InputEmail" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="form-floating mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password"/>
        </div>
        <div class="form-floating mb-3">
        <label for="password1" class="form-label">Confirm Password</label>
        <input type="password1" class="form-control" id="password1"/>
        </div>
        <div class="mb-3 form-check">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;