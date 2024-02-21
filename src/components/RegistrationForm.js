import React, { useEffect, useState } from "react";

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  useEffect(() => {
    document.title = "User Registration";
  });

  if (submitted) {
    return <h2 id="successMsg">User Registration Completed</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Registration</h1>
      <input type="text" placeholder="First Name" required id="firstname" />
      <input type="text" placeholder="Last Name" required id="lastname" />
      <input type="text" placeholder="Email ID" required id="email" />
      <button type="submit" id="submit">
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
