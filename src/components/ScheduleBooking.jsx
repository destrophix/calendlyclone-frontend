import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slot from "./Slot";

function ScheduleBooking() {
  let params = useParams();
  const [schedule, setSchedule] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/schedule/${params.scheduleId}`)
      .then((res) => {
        setSchedule(res.data.schedule);
        setIsValid(true);
      });
  }, [params.scheduleId]);

  return (
    <div>
      {isValid ? <Slot schedule={schedule} /> : <div>Invalid Schedule Id </div>}
    </div>
  );
}

export default ScheduleBooking;
