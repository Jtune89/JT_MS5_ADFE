import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  return (
    <div className={styles.CardDiv}>
      <hr />
      <Card className={styles.Card}>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Card.Body>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comment;