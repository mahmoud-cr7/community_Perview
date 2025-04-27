import React, { useState } from "react";
import "./profile.css";
import AhmedSaad from "../../assets/avatar.png";
import messageIcon from "../../assets/duo-icons_message.png";

const ProfileCard = () => {
  const [occupation, setOccupation] = useState("");
  const [skills, setSkills] = useState("");
  const [dob, setDob] = useState("");

  const [errors, setErrors] = useState({
    occupation: "",
    skills: "",
    dob: "",
  });

  const handleSendMessage = () => {
    const newErrors = {
      occupation: occupation.trim() ? "" : "Occupation is required.",
      skills: skills.trim() ? "" : "Skills are required.",
      dob: dob ? "" : "Date of birth is required.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;

    console.log("Message sent successfully!");
  };

  const handleInputChange = (field, value) => {
    // Update the value
    if (field === "occupation") setOccupation(value);
    if (field === "skills") setSkills(value);
    if (field === "dob") setDob(value);

    // Clear error for this input if user starts typing
    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  const getInputClass = (field) => (errors[field] ? "input-error" : "");
  return (
    <div className="profile-card ">
      <div className="profile-header container">
        <img src={AhmedSaad} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>Ahmed Saad</h1>
          <p className="username">@ahmed.saad.zb</p>
          <h2 className="profile-title">Community Owner / Volunteer</h2>
        </div>
      </div>

      <span className="line"></span>

      <div className="action-buttons container">
        <button className="btn message" onClick={handleSendMessage}>
          <span>Send Message</span>
          <img src={messageIcon} alt="Message Icon" className="message-icon" />
        </button>
        <div className="action-buttons-right">
          <button className="btn">Mute</button>
          <button className="btn">Delete</button>
          <button className="btn">Block</button>
          <button className="btn">Report</button>
        </div>
      </div>

      <div className="about-section container">
        <h3>About me</h3>
        <div className="divider"></div>
        <p>
          Hello! I'm Ahmed Saad, an AI developer and researcher with a strong
          passion for data science and programming. As a volunteer, I love to
          share my knowledge and skills in AI. Born in 1998, I'm always excited
          to push the boundaries of technology and innovation. Let's connect and
          explore the world of AI together!
        </p>
      </div>

      <div className="details-section container">
        <div className="details-input">
          <h3>Education/Occupation</h3>
          <input
            className={getInputClass("occupation")}
            value={occupation}
            type="text"
            name="occupation"
            id="occupation"
            onChange={(e) => handleInputChange("occupation", e.target.value)}
            // value="MIS, AI Developer and Researcher"
            placeholder="MIS, AI Developer and Researcher"
          />
          {errors.occupation && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.occupation}
            </span>
          )}
        </div>
        <div className="details-input">
          <h3>Skills/Expertise</h3>
          <input
            className={getInputClass("skills")}
            value={skills}
            type="text"
            name="skills"
            id="skills"
            // value="Data Science, Programming, AI"
            onChange={(e) => handleInputChange("skills", e.target.value)}
            placeholder="Data Science, Programming, AI"
          />
          {errors.skills && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.skills}
            </span>
          )}
        </div>

        <div className="details-input">
          <h3>Date of Birth</h3>
          <input
            className={getInputClass("dob")}
            value={dob}
            type="date"
            name="dob"
            id="dob"
            onChange={(e) => handleInputChange("dob", e.target.value)}
            // value="1998-01-01"
            placeholder="1998-01-01"
          />
          {errors.dob && (
            <span style={{ color: "red", fontSize: "14px" }}>{errors.dob}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
