import React from 'react';
import VRMViewer from './components/VRMViewer';
import ChatInterface from './components/ChatInterface';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <VRMViewer modelUrl="/models/Fiona.vrm" />
      <ChatInterface />
    </div>
  );
};

export default App;