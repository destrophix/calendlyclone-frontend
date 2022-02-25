import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import CreateSchedule from "./components/CreateSchedule";
import ScheduleBooking from "./components/ScheduleBooking";
import DeleteSlot from "./components/DeleteSlot";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 bg-light p-0">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<CreateSchedule />} />
              <Route
                path="/schedulebooking/:scheduleId"
                element={<ScheduleBooking />}
              />
              <Route path="/deleteslot/:scheduleId" element={<DeleteSlot />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
