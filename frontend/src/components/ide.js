import React, { useState } from 'react';

const IDE = ({ onExecuteCommand }) => {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleFileContentChange = (event) => {
    setFileContent(event.target.value);
  };

  const handleSaveFile = () => {
    // Save the file locally or perform any desired actions
    // You can customize this function to suit your requirements
    console.log('File saved:', fileName, fileContent);
  };

  const handleExecuteCommand = () => {
    // Pass the file content to the terminal for processing
    onExecuteCommand(fileContent);
  };

  return (
    <div className="ide-container">
      <div className="ide-editor">
        <input
          type="text"
          placeholder="Enter file name"
          value={fileName}
          onChange={handleFileNameChange}
          className="ide-input"
        />
        <textarea
          rows="10"
          placeholder="Enter file content"
          value={fileContent}
          onChange={handleFileContentChange}
          className="ide-textarea"
        />
      </div>
      <div className="ide-actions">
        <button onClick={handleSaveFile} className="ide-button">
          Save
        </button>
        <button onClick={handleExecuteCommand} className="ide-button">
          Execute
        </button>
      </div>
    </div>
  );
};

export default IDE;
