import React from 'react';

function Button({ text, onClick }) {
  const handleClick = () => {

    
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;
