import { Accordion } from "react-bootstrap";

function AttendeeInfo({ schedule }) {
  let bookedSlots = schedule.bookedSlots.map((ele) => ele);

  let starttime = new Date(schedule.startTime);
  let endtime = new Date();
  bookedSlots = bookedSlots.map((ele) => {
    let s = new Date(
      starttime.getTime() +
        (ele.slot - 1) * (schedule.duration + schedule.breakTime) * 60 * 1000
    );
    endtime = new Date(s.getTime() + schedule.duration * 60 * 1000);
    let obj = {
      ...ele,
      s,
      endtime,
    };
    return obj;
  });

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Slot Info</Accordion.Header>
          <Accordion.Body>
            {bookedSlots.map((ele) => (
              <div key={ele.slot}>
                <div> {ele.attendeeInfo.email} </div>
                <div>
                  {ele.s.toLocaleTimeString()} -{" "}
                  {ele.endtime.toLocaleTimeString()}
                </div>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AttendeeInfo;
