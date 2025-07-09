import React from 'react';
import { useLocation } from 'react-router-dom';

const createCode = () => {
  const pool = 'abc123XYZuvw456LMN789rstDEFghiJKlopq';
  let result = '';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result += pool[index];
  }
  return result;
};

const ShowResultPage = () => {
  const { state } = useLocation();
  const entries = state?.urls || [];

  return (
    <div>
      <h1>Results</h1>
      {entries.map((item, idx) => {
        const code = item.shortform?.trim() !== '' ? item.shortform : createCode();
        const finalLink = `https://short.ly/${code}`;

        return (
          <div key={idx}>
            <p>{item.original}</p>
            <p>{finalLink}</p>
            <p>{item.validtill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowResultPage;
