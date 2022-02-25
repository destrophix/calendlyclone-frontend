import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookSlot from "./BookSlot";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DeleteSlot() {
  let params = useParams();
  const [deleted, setDeleted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  const handleDelete = (e) => {
    axios
      .post(`http://localhost:4000/api/v1/deleteslot/`, {
        scheduleId: params.scheduleId,
        email,
      })
      .then((res) => setDeleted(true));
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/schedule/${params.scheduleId}`)
      .then((res) => {
        setIsValid(true);
      });
  }, [params.scheduleId]);

  console.log(deleted);
  return (
    <div className="login d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            {isValid ? (
              !deleted ? (
                <Form onSubmit={handleDelete}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              ) : (
                <div> deleted</div>
              )
            ) : (
              <div>Not valid</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeleteSlot;
