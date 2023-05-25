import React, { useState } from 'react';

const Terminal = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Execute command logic here...
    } catch (error) {
      // Handle error...
    }

    setInputValue('');
  };

  return (
    <div className="terminal-container">
      <div className="terminal-output">{output}</div>
      <form onSubmit={handleSubmit} className="terminal-form">
  <span className="terminal-prompt">$</span>
  <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    className="terminal-input"
  />
  {/* Remove the submit button */}
</form>

    </div>
  );
};

export default Terminal;
