import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TypeZone from './components/TypeZone';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    difficulty: 'medium',
    textLength: 150,
    theme: 'dark',
    soundEnabled: true,
    showTimer: true,
    showErrors: true
  });

  const handleSettingsSave = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="App">
      <Navbar onSettingsClick={() => setShowSettings(true)} />
      <main className="main-content">
        <section className="hero">
          <h1>MohaType</h1>
          <p>Améliorez votre vitesse de frappe avec ce jeu interactif</p>
        </section>
        <TypeZone settings={settings} />
      </main>
      
      {showSettings && (
        <Settings 
          onClose={() => setShowSettings(false)}
          settings={settings}
          onSave={handleSettingsSave}
        />
      )}
    </div>
  );
};

export default App;