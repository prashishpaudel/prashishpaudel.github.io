import React from 'react';
const ImageModal = ({selectedImg, setSelectedImg}) => {
    if (!selectedImg) return null;
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={() => setSelectedImg(null)}
      >
        <img src={selectedImg} alt="Selected" style={{maxWidth: '90%', maxHeight: '90%'}} />
      </div>
    );
  }
  
export default ImageModal;
  