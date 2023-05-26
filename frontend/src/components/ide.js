import React, { useState, useEffect } from 'react';

const IDE = ({ onExecuteCommand }) => {
  const [fileContent, setFileContent] = useState('');
  const [outputFileContent, setOutputFileContent] = useState('');

  const handleFileContentChange = (event) => {
    setFileContent(event.target.value);
  };

  const handleRunCode = () => {
    const formData = new FormData();
    formData.append('script', fileContent);

    fetch('http://localhost:8081/build', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // Read the response as text
        } else {
          throw new Error('Failed to run code.');
        }
      })
      .then(content => {
        setOutputFileContent(content); // Set the response content in state
      })
      .catch(error => {
        console.error('Error running code:', error);
      });
  };

  useEffect(() => {
    // Render the response content when it updates
    if (outputFileContent !== '') {
      // Display the response content
      console.log('Response content:', outputFileContent);
    }
  }, [outputFileContent]);

  return (
    <div className="ide-container">
      <div className="ide-editor">
        <textarea
          rows="10"
          placeholder="Enter file content"
          value={fileContent}
          onChange={handleFileContentChange}
          className="ide-textarea"
        />
      </div>
      <div className="ide-response">
        {outputFileContent}
      </div>
      <div className="ide-actions">
        <button onClick={handleRunCode} className="ide-button">
          Run
        </button>
      </div>
    </div>
  );
};

export default IDE;
