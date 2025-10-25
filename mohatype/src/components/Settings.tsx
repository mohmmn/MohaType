import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ onClose, settings, onSave }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleChange = (key, value) => {
    setLocalSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>⚙️ Paramètres</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="settings-content">
          <div className="setting-group">
            <h3>🎮 Difficulté</h3>
            <select 
              value={localSettings.difficulty} 
              onChange={(e) => handleChange('difficulty', e.target.value)}
              className="setting-select"
            >
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </select>
          </div>

          <div className="setting-group">
            <h3>📝 Longueur du texte</h3>
            <div className="slider-container">
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="50"
                value={localSettings.textLength} 
                onChange={(e) => handleChange('textLength', parseInt(e.target.value))}
                className="setting-slider"
              />
              <span className="slider-value">{localSettings.textLength} caractères</span>
            </div>
          </div>

          <div className="setting-group">
            <h3>🎨 Thème</h3>
            <div className="theme-options">
              <button 
                className={`theme-btn ${localSettings.theme === 'dark' ? 'active' : ''}`}
                onClick={() => handleChange('theme', 'dark')}
              >
                🌙 Sombre
              </button>
              <button 
                className={`theme-btn ${localSettings.theme === 'light' ? 'active' : ''}`}
                onClick={() => handleChange('theme', 'light')}
              >
                ☀️ Clair
              </button>
            </div>
          </div>

          <div className="setting-group">
            <h3>🔊 Son</h3>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={localSettings.soundEnabled}
                onChange={(e) => handleChange('soundEnabled', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">
              {localSettings.soundEnabled ? 'Activé' : 'Désactivé'}
            </span>
          </div>

          <div className="setting-group">
            <h3>⏱️ Afficher le chronomètre</h3>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={localSettings.showTimer}
                onChange={(e) => handleChange('showTimer', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">
              {localSettings.showTimer ? 'Activé' : 'Désactivé'}
            </span>
          </div>

          <div className="setting-group">
            <h3>🎯 Afficher les erreurs</h3>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={localSettings.showErrors}
                onChange={(e) => handleChange('showErrors', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">
              {localSettings.showErrors ? 'Activé' : 'Désactivé'}
            </span>
          </div>
        </div>

        <div className="settings-footer">
          <button className="cancel-btn" onClick={onClose}>Annuler</button>
          <button className="save-btn" onClick={handleSave}>Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;