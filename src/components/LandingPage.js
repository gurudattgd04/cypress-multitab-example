import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to our site</h1>
      <Link to="/register" target="_blank" id="registrationLink">
        Register Here
      </Link>
    </div>
  );
}

export default LandingPage;
