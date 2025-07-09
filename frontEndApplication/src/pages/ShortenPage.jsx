import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShortenPage.css';

const ShortenPage = () => {
  const [urls, setUrls] = useState([{ original: "", validtill: "", shortform: "" }]);
  const navigate = useNavigate();

  const handleUrl = () => {
    if (urls.length < 5) {
      setUrls([...urls, { original: "", validtill: "", shortform: "" }]);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedUrls = [...urls];
    updatedUrls[index][field] = value;
    setUrls(updatedUrls);
  };

  const handleNext = () => {
    navigate("/validate", { state: { urls } });
  };

  return (
    <div className="main">
      <h1 className="title">Shorten URL</h1>
      {urls.map((url, index) => (
        <div key={index} className="url-box">
          <input
            type="text"
            placeholder="Original URL"
            value={url.original}
            onChange={(e) => handleChange(index, "original", e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Validity Period (optional)"
            value={url.validtill}
            onChange={(e) => handleChange(index, "validtill", e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Preferred shortform (optional)"
            value={url.shortform}
            onChange={(e) => handleChange(index, "shortform", e.target.value)}
            className="input"
          />
        </div>
      ))}
      <div className="btn-group">
        {urls.length < 5 && (
          <button onClick={handleUrl} className="btn add">
            Add Another URL
          </button>
        )}
        <button onClick={handleNext} className="btn next">
          Next
        </button>
      </div>
    </div>
  );
};

export default ShortenPage;
