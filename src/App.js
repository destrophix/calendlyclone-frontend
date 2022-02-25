import "./App.css";
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
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/forgotPassword">forgot password</Link>
            </li>
          </ul>
        </div>

        <Routes>
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
  );
}

export default App;
