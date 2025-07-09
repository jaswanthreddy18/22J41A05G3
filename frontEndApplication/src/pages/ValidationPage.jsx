import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ValidationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const urls = location.state?.urls || [];

  const isValid = urls.every((url) => url.original.trim() !== "");

  const handleNext = () => {
    if (isValid) {
      navigate("/results", { state: { urls } });
    } else {
      alert("Please fill in all required fields.");
    }
  };
  return (
    <div>
      <h1>Validation</h1>
      {urls.map((url, index) => (
        <div key={index}>
          <p>Original URL: {url.original || "Missing"}</p>
          <p>Validity Period: {url.validtill || "Not Provided"}</p>
          <p>Preferred Shortcode: {url.shortform || "Not Provided"}</p>
        </div>
      ))}
      <button onClick={handleNext}>Generate URLs</button>
    </div>
  )
}

export default ValidationPage