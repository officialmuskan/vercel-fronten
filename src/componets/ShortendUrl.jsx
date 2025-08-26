import React from 'react';
const ShortenedUrl = ({ shortUrl, copyToClipboard }) => {
  return (
    <div>
      <label>Your shortened URL:</label>
      <div>
        <input type="text" value={shortUrl} readOnly className="input" />
        <button onClick={() => copyToClipboard(shortUrl)}>
           Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenedUrl;
