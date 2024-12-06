import "./Plans.css";
import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";

function Plans() {
  return (
    <>
      <div id="plans" className="background">
        <div className="container">
          <div className="panel pricing-table">
            <div className="pricing-plan">
              <img src={logo1} alt="" className="pricing-img" />
              <h2 className="pricing-header">Standard</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Classic</li>
                <li className="pricing-features-item">
                  Sleeps after 30 mins of inactivity
                </li>
              </ul>
              <span className="pricing-price">$50</span>
              <a href="#/" className="pricing-button">
                Book
              </a>
            </div>

            <div className="pricing-plan">
              <img src={logo2} alt="" className="pricing-img" />
              <h2 className="pricing-header">Custom</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Never sleeps</li>
                <li className="pricing-features-item">
                  Multiple workers for more powerful apps
                </li>
              </ul>
              <span className="pricing-price">$150</span>
              <a href="#/" className="pricing-button is-featured">
                book
              </a>
            </div>

            <div className="pricing-plan">
              <img src={logo3} alt="" className="pricing-img" />
              <h2 className="pricing-header">VIP</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Dedicated</li>
                <li className="pricing-features-item">
                  Simple horizontal scalability
                </li>
              </ul>
              <span className="pricing-price">$400</span>
              <a href="#/" className="pricing-button">
                book
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
