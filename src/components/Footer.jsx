import { useState } from "react";
import foot from "../assets/footer.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
    });
  };
  return (
    <footer>
      <div className="footer">
        <div className="image">
          <img src={foot} alt="Footer logo" />
        </div>
        <div>
          <h2>OUR MISSION</h2>
          <p className="mission-p">
            Our Mission is to provide the highest possible level of health
            services to all people in Uganda through delivery of promotive,
            preventive, curative , palliative and rehabilitative health services
            at all levels”.
          </p>
        </div>
        <div>
          <h2>CONTACT US TODAY</h2>
          <p>
            CALL CENTER TOLL FREE 0800-100-066 Address: Plot 6, Lourdel Road,
            Nakasero P.O Box 7272, Kampala Uganda.
          </p>
        </div>
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="foot"></div>
    </footer>
  );
};

export default Footer;
