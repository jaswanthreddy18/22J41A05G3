import React from 'react'
import { useLocation } from 'react-router-dom';

const ShowResultPage = () => {
    const location = useLocation();
    const urls = location.state?.urls || [];
  return (
<div>
      <h1>Results</h1>
      {urls.map((url, index) => (
        <div key={index}>
          <p>Original URL: {url.original}</p>
          <p>Shortened URL: {`https://short.ly/${url.shortform || "random-code"}`}</p>
          <p>Validity Period: {url.validtill || "No Expiry"}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowResultPage