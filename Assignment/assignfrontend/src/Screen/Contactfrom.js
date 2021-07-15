import React, { useState } from "react";
import { register } from "../Action/action";
import { connect } from "react-redux";
import ReCaptchaV2 from "react-google-recaptcha";
import "./all.css";
const Contactfrom = ({ register, history }) => {
  const [isverified, setIsVerified] = useState([]);
  const [contactdata, setContactData] = useState({});

  const onChange = (e) =>
    setContactData({ ...contactdata, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    register(contactdata, history);
  };
  return (
    <div id="di">
      <h1 className="head">Contact Us Form</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group" id="lg">
          <br />
          <label className="label">First Name</label>
          <br />
          <input
            id="form"
            className="form-control"
            type="text"
            placeholder="first_name"
            name="first_name"
            value={contactdata.first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group" id="lg">
          <br />
          <label className="label">Last Name</label>
          <br />
          <input
            id="form"
            className="form-control"
            type="text"
            placeholder="last_name"
            name="last_name"
            value={contactdata.last_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group" id="lg">
          <br />
          <label className="label">Email</label>
          <br />
          <input
            id="form"
            className="form-control"
            type="text"
            placeholder="email"
            name="email"
            value={contactdata.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group" id="lg">
          <br />
          <label className="label">Massage</label>
          <br />
          <input
            id="form"
            className="form-control"
            type="text"
            placeholder="massage"
            name="massage"
            value={contactdata.massage}
            onChange={onChange}
            required
          />
        </div>
        <ReCaptchaV2 sitekey="6LfSeZobAAAAADDuehOL2X31Qxg-Kvv4gQL2hkKu" />
        <button id="form" className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default connect(null, { register })(Contactfrom);
