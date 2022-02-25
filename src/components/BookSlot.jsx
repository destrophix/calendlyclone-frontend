import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BookSlot({ scheduleId }) {
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSlotChange(e) {
    setSlot(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:4000/api/v1/bookslot",
        {
          scheduleId,
          attendeeInfo: {
            email,
          },
          slot,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setSubmitted(res.data.success);
      });

    e.preventDefault();
  }

  return (
    <div className="login d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            {!submitted ? (
              <Form onSubmit={handleSubmit}>
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Slot</Form.Label>
                  <Form.Control
                    type="number"
                    name="slot"
                    placeholder="Enter slot no."
                    value={slot}
                    onChange={handleSlotChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              <div> submitted</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookSlot;
