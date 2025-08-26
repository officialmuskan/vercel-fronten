
import React, { useState, useEffect } from 'react';
import UrlForm from './componets/UrlForm';
import Message from './componets/Message';
import ShortenedUrl from './componets/ShortendUrl';
import UrlHistory from './componets/UrlHistory';

const App = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const BASE_URL = 'http://localhost:5000';

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/urls`);
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const shortenUrl = async (e) => {
    if (e) e.preventDefault();
    if (!originalUrl.trim()) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${BASE_URL}/api/url/shorten`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.shortUrl);
        setMessage('URL shortened successfully!');
        setMessageType('success');
        fetchUrls();
      } else {
        setMessage(data || 'Error shortening URL');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setMessageType('error');
    }

    setLoading(false);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setMessage('URL copied to clipboard!');
    setMessageType('success');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container">
      <h1 className="">URL Shortener</h1>

      <UrlForm
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        shortenUrl={shortenUrl}
        loading={loading}
      />

      {message && <Message type={messageType} text={message} />}

      {shortUrl && (
        <ShortenedUrl shortUrl={shortUrl} copyToClipboard={copyToClipboard} />
      )}

      <UrlHistory urls={urls} copyToClipboard={copyToClipboard} />
    </div>
  );
};

export default App;
