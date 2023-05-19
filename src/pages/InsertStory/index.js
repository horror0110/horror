import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

function InsertStory() {
  const [feedback, setFeedback] = useState("");
  const [bottomText, setBottomText] = useState([]);

  const handleInputChange = (event) => {
    setFeedback(event.target.value);

  };



  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (feedback.trim() === "") {
      return;
    }
  
    const story = {
      message: feedback,
    };
  
    axios
      .post(
        "https://horrorstory-71e65-default-rtdb.firebaseio.com/stories.json",
        story
      )
      .then((response) => {
        setBottomText((prevNotifications) => [
          ...prevNotifications,
          "Баярлалаа хүлээн авлаа",
        ]);
      })
      .catch((err) => console.log(err));
  
    setFeedback("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
<div className={styles.FormContainer}>
  <form onSubmit={handleSubmit} className={styles.feedbackForm}>
  <label className={styles.feedbackLabel}>
          Өөрт тохиолдсон явдлаа бичих
          <textarea
            className={styles.feedbackInput}
            value={feedback}
            onChange={handleInputChange}   
            onKeyDown={handleKeyDown}
            required
          />
        </label>
        <button type="submit" className={styles.submitButton}>
           илгээх
        </button>{" "}
        <br /> <br />
    <div>
      {bottomText.map((text, index) => (
        <div key={index} id={styles.disappearingText}>
          {text}
        </div>
      ))}
    </div>
  </form>
</div>

  );
}

export default InsertStory;
