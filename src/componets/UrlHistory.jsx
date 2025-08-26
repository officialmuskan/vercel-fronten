import React from 'react';

const UrlHistory = ({ urls, copyToClipboard }) => {
  return (
    <div className="input">
      <h1>URL History</h1>

      {urls.length > 0 ? (
        <div className="">
          {urls.map((url) => (
            <div
              key={url._id}
              style={{
                border: '1px solid white',
                margin: '20px 0',
                color: 'white',
                borderRadius: '10px',
                padding: '10px',
              }}
            >
              <div>
                <p>Original URL:</p>
                <a
                  href={url.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.originalUrl}
                </a>
              </div>

              <div>
                <p>Short URL:</p>
                <div>
                  <a
                    href={url.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.shortUrl}
                  </a>
                  <button style={{padding:'0 10px', margin:'10px'}} onClick={() => copyToClipboard(url.shortUrl)}>
                    {/* <Copy /> */} Copy
                  </button>
                </div>
              </div>

              <div>{url.clicks} clicks</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No URLs shortened yet. Create your first short URL above!</p>
      )}
    </div>
  );
};

export default UrlHistory;
