import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Image from './components/Image';
import Modal from './components/Model';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Image setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
