import axios from "axios";
import { useEffect, useState } from "react";
import Schedule from "./Schedule";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Dashboard() {
  const [schedules, setSchedules] = useState([]);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function getUserDetails() {
    axios
      .get("http://localhost:4000/api/v1/dashboard", { withCredentials: true })
      .then((res) => {
        setLoggedIn(res.data.success);
        setUser(res.data.user);
      });
  }

  function getSchedule() {
    axios
      .get("http://localhost:4000/api/v1/schedules", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setSchedules(res.data.schedules);
      });
  }

  async function deleteSchedule(schedule) {
    await axios
      .post(
        "http://localhost:4000/api/v1/schedule/delete",
        { scheduleId: schedule._id, email: user.email },
        { withCredentials: true }
      )
      .then((res) => {
        getSchedule();
      });
  }

  function logout() {
    axios
      .get("http://localhost:4000/api/v1/logout", {
        withCredentials: true,
      })
      .then((res) => {
        setLoggedIn(!res.data.success);
      });
  }

  useEffect(() => {
    getSchedule();
    getUserDetails();
  }, []);

  return (
    <div>
      {loggedIn ? (
        <div>
          <Button variant="white" type="submit">
            <Link to="/create">create</Link>
          </Button>
          <Button variant="white" type="submit" onClick={logout}>
            logout
          </Button>
          {schedules.map((schedule, index) => (
            <Schedule
              key={schedule._id}
              schedule={schedule}
              deleteSchedule={deleteSchedule}
            />
          ))}
        </div>
      ) : (
        <div>You are not loggedin </div>
      )}
    </div>
  );
}

export default Dashboard;
