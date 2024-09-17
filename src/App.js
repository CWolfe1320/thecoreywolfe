import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/cards/CardContainer';
import ContactBar from './components/contactBar/ContactBar';

function App() {
  const [view, setView] = useState('main');

  const handleStateChange = (state) => {
    console.log(state);
    setView(state);
    console.log(view); // Note: This might not show the updated state immediately
  };

  if (view === 'main') {
    return (
      <div className='siteContainer'>
        <div className='navigatorContainer'>
          <CardContainer stateChange={handleStateChange}/>
        </div>

        <div className='contactBarContainer'>
          <ContactBar toggleSide='top'/>
        </div>
      </div>
    );
  }
  else if(view === 'Personal Blog'){
    return (
      <div className='siteContainer'>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Blog Coming Soon...</h1>
          <h1 style={{ color: 'white', textAlign: 'center', opacity: '0.5', cursor: 'pointer'}} onClick={() => handleStateChange('main')}>../main</h1>
        </div>
      </div>
    );
  }
  else if(view === 'Projects'){
    return (
      <div className='siteContainer'>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Projects Coming Soon...</h1>
          <h1 style={{ color: 'white', textAlign: 'center', opacity: '0.5', cursor: 'pointer'}} onClick={() => handleStateChange('main')}>../main</h1>
        </div>
      </div>
    );
  }
  else if(view === 'Inspiration'){
    return (
      <div className='siteContainer'>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Inspiration Coming Soon...</h1>
          <h1 style={{ color: 'white', textAlign: 'center', opacity: '0.5', cursor: 'pointer'}} onClick={() => handleStateChange('main')}>../main</h1>
        </div>
      </div>
    );
  }
}

export default App;

