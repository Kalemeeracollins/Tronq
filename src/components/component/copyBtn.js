'use client'
import { useState } from 'react';

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const linkText = document.getElementById('invitation-link').textContent;
    navigator.clipboard.writeText(linkText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }).catch((error) => {
      console.error('Failed to copy:', error);
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button className="copy-button" id="invitation-link" onClick={copyToClipboard}>Invitation Link</button>
      </div>
      {copied && <span>Link copied to clipboard</span>}
      <style jsx>{`
        .copy-button {
          padding: 8px 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .copy-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default CopyButton;
