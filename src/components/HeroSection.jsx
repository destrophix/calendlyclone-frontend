function HeroSection() {
  return (
    <div className="d-flex mt-4 align-items-center p-2">
      <div className="border border-dark">
        <img
          src="/meeting.jpg"
          width="450"
          height="240"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </div>
      <div className="d-flex flex-column px-5">
        Calendly is your hub for scheduling meetings professionally and
        efficiently, eliminating the hassle of back-and-forth emails so you can
        get back to work.
        <div className="d-flex mt-2">
          <button type="button" className="btn btn-outline-primary">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
