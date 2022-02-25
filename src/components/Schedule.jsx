import AttendeeInfo from "./AttendeeInfo";

function Schedule({ schedule, deleteSchedule }) {
  let date = new Date(schedule.date);
  let starttime = new Date(schedule.startTime);
  let endtime = new Date(
    starttime.getTime() +
      (schedule.duration * schedule.numberOfSlots +
        schedule.breakTime * (schedule.numberOfSlots - 1)) *
        60 *
        1000
  );

  function handleChange() {}
  return (
    <div>
      <h5>Id : {schedule._id}</h5>
      <h5>Date : {date.toDateString()}</h5>
      <h5>Start Time : {starttime.toLocaleTimeString()}</h5>
      <h5>End Time : {endtime.toLocaleTimeString()}</h5>
      <h5>Duration : {schedule.duration}</h5>
      <h5>Number of Slots : {schedule.numberOfSlots}</h5>
      <h5>Booked Slots : {schedule.bookedSlots.length}</h5>
      {schedule.bookedSlots.length !== 0 && (
        <AttendeeInfo schedule={schedule} />
      )}
      <button
        onClick={() => {
          deleteSchedule(schedule);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Schedule;
