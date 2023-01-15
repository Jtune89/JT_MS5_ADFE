import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  const currentUser = useCurrentUser()
  const is_owner = currentUser?.username === owner;

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
        {is_owner && (
            <MoreDropdown className={styles.Dots} handleEdit={() => {}} handleDelete={() => {}} />
        )}
      </Card>
    </div>
  );
};

export default Comment;