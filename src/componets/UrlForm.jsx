import React from 'react';

const UrlForm = ({ originalUrl, setOriginalUrl, shortenUrl, loading }) => {
  return (
    <div>
      <label htmlFor="url">Enter your URL</label>
      <div>
        <input
          type="url"
          id="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Add your link"
          className="input"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && originalUrl.trim()) {
              shortenUrl(e);
            }
          }}
        />
      </div>
      <button
        onClick={shortenUrl}
        disabled={loading || !originalUrl.trim()}
        className=""
      >
        {loading ? (
          <div className=""></div>
        ) : (
          'Shorten URL'
        )}
      </button>
    </div>
  );
};

export default UrlForm;
