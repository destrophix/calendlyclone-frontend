import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreateSchedule() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [numberofSlots, setnumberofSlots] = useState(0);
  const [duration, setDuration] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleStartTime(e) {
    setStartTime(e.target.value);
  }

  function handleNumberofSlots(e) {
    setnumberofSlots(e.target.value);
  }

  function handleDuration(e) {
    setDuration(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:4000/api/v1/schedule/create",
        {
          date,
          startTime,
          numberOfSlots: numberofSlots,
          duration,
          brakTime: 0,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setSubmitted(true);
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
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={handleDateChange}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="startTime"
                    placeholder="start time"
                    value={startTime}
                    onChange={handleStartTime}
                  />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Number of Slots</Form.Label>
                  <Form.Control
                    type="number"
                    name="numberofSlots"
                    placeholder="Number of slots"
                    value={numberofSlots}
                    onChange={handleNumberofSlots}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="number"
                    name="duration"
                    placeholder="duration"
                    value={duration}
                    onChange={handleDuration}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              //   <Navigate to="/dashboard" />
              <div>done</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateSchedule;
