import React, { useState } from 'react';
import axios from 'axios';
import styles from "./style.module.css"

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message ={
      message: feedback
    }

    axios.post("https://horrorstory-71e65-default-rtdb.firebaseio.com/messages.json" , message).
    then(response => alert("Amjilttai ilgeegdlee")).catch(err => console.log(err));
  

    setFeedback(''); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.feedbackForm}>
    <label className={styles.feedbackLabel}>
      Санал хүсэлтээ бичнэ үү:
      <textarea
        className={styles.feedbackInput}
        value={feedback}
        onChange={handleInputChange}
      />
    </label>
    <button type="submit" className={styles.submitButton}>Submit</button>
  </form>
  );
}

export default FeedbackForm;
