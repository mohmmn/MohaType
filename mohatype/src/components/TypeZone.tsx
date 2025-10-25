import React, { useState, useEffect, useRef } from 'react';
import './TypeZone.css';

const TypeZone = () => {
  const sampleText = "Bonjour, bienvenue dans ce jeu de dactylographie. Tapez ce texte aussi vite que possible sans faire d'erreurs.";
  
  const [userInput, setUserInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus automatique sur l'input au chargement
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const newChar = value[value.length - 1];
    const expectedChar = sampleText[currentIndex];

    if (newChar === expectedChar) {
      setUserInput(value);
      setCurrentIndex(currentIndex + 1);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleReset = () => {
    setUserInput('');
    setCurrentIndex(0);
    setHasError(false);
    inputRef.current?.focus();
  };

  const renderText = () => {
    return sampleText.split('').map((char, index) => {
      let className = 'char';
      
      if (index < currentIndex) {
        className += ' typed';
      } else if (index === currentIndex && hasError) {
        className += ' error';
      } else {
        className += ' untyped';
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  const progress = Math.round((currentIndex / sampleText.length) * 100);
  const isCompleted = currentIndex === sampleText.length;

  return (
    <div className="typezone-container">
      <div className="typezone-header">
        <h2>La ZONE DE FRAPPE</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{progress}% complété</p>
      </div>

      <div className="text-display">
        {renderText()}
      </div>

      {isCompleted ? (
        <div className="completion-message">
          <h3>Bravo grand bg ;)</h3>
          <p> T'as terminé le texte !</p>
          <button className="reset-btn" onClick={handleReset}>
            Recommencer
          </button>
        </div>
      ) : (
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className={`typing-input ${hasError ? 'input-error' : ''}`}
            placeholder="Commencez à taper ici..."
            disabled={isCompleted}
          />
          {hasError && (
            <p className="error-message">❌ Touche incorrecte !</p>
          )}
        </div>
      )}

      <button className="reset-btn-small" onClick={handleReset}>
        Réinitialiser
      </button>
    </div>
  );
};

export default TypeZone;