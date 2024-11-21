import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Functions() {
  const { session } = useAuth();
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    { tag: '#pay', description: 'Send payments', color: '#22c55e' },
    { tag: '#swap', description: 'Swap assets', color: '#3b82f6' },
    { tag: '#lend', description: 'Lend assets', color: '#f59e0b' },
    { tag: '#invest', description: 'Invest in assets', color: '#8b5cf6' }
  ];

  const handleFunctionClick = (func) => {
    setSelectedFunction(func);
    // TODO: Implement function logic
    console.log(`Selected function: ${func.tag}`);
  };

  return (
    <div className="container">
      <div className="functions-header">
        <h2>Financial Functions</h2>
        <p className="functions-subtitle">Quick access to financial operations</p>
      </div>

      <div className="functions-grid">
        {functions.map((func) => (
          <div
            key={func.tag}
            className="function-card"
            style={{ '--function-color': func.color }}
            onClick={() => handleFunctionClick(func)}
          >
            <div className="function-tag">{func.tag}</div>
            <div className="function-description">{func.description}</div>
          </div>
        ))}
      </div>

      {selectedFunction && (
        <div className="function-modal">
          <h3>{selectedFunction.tag}</h3>
          <p>Coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default Functions;
