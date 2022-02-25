import BookSlot from "./BookSlot";
function Slot({ schedule }) {
  let allSlots = Array.from(
    { length: schedule.numberOfSlots },
    (_, i) => i + 1
  );

  let availableSlots = allSlots.filter((el) => {
    return schedule.bookedSlots.every((f) => {
      return f.slot !== el;
    });
  });

  console.log(availableSlots);

  let date = new Date(schedule.date);
  let starttime = new Date(schedule.startTime);
  let endtime = new Date();
  let timings = availableSlots.map((ele) => {
    let s = new Date(
      starttime.getTime() +
        (ele - 1) * (schedule.duration + schedule.breakTime) * 60 * 1000
    );
    endtime = new Date(s.getTime() + schedule.duration * 60 * 1000);
    let obj = {
      slot: ele,
      s,
      endtime,
    };
    return obj;
  });

  return (
    <div>
      <h5>Date : {date.toDateString()}</h5>
      {timings.map((ele) => (
        <p key={ele.s}>
          {ele.slot}.\ {ele.s.toLocaleTimeString()} -{" "}
          {ele.endtime.toLocaleTimeString()}
        </p>
      ))}
      <BookSlot scheduleId={schedule._id} />
    </div>
  );
}

export default Slot;
