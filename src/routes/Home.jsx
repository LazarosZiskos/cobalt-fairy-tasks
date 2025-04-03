import "./Home.scss";

// Home Component (landing page)

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome 👋</h1>
      <p>
        Thank you for taking the time to review my take-home assignment. This
        mini-site is designed to showcase the different tasks I’ve completed as
        part of the challenge.
      </p>
      <p>
        Use the navigation above to explore each task individually. Each route
        represents a specific requirement.
      </p>
      <p className="thank-you">
        Thanks again for your time and consideration! <br />
        Lazaros Ziskos
      </p>
    </div>
  );
};

export default Home;
