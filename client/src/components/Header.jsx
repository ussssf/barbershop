import "./Header.css";
import barber from "../assets/barber.jpg";

function Header() {
  return (
    <>
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">
              Your <b>Barbershop</b>
            </a>
            <ul className="links">
              <li>
                <a href="#schedule_form">Book your session</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Need a Cut ? </h1>
              <p>
                we believe that a great haircut is more than just a trim – it’s
                an experience. Our skilled barbers combine classic techniques
                with modern styles to give you a haircut that’s perfect for your
                unique personality. Whether you’re looking for a sharp fade, a
                clean shave, or just a simple trim, we’ve got you covered. Come
                in, relax, and let us take care of the rest. We’re dedicated to
                making you look and feel your best every time you sit in our
                chair.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("plans")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                take a look at our plans{" "}
              </button>
            </div>
            <div className="image">
              <img src={barber} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
