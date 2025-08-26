import React from 'react';

const Message = ({ type, text }) => {
  return (
    <div
      className="input"
    >
      {text}
    </div>
  );
};

export default Message;
