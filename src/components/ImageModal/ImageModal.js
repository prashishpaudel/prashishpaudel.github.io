import React from 'react';
const ImageModal = ({ selectedImg, setSelectedImg }) => {
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
            <div style={{
                position: 'relative',
                display:'inline-block'
            }}>
                <button
                    style={{
                        position: 'absolute',
                        top: '2.5px',
                        right: '2.5px',
                        backgroundColor: '#f7b2c2',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={(e) => {
                        e.stopPropagation(); // This stops the modal from closing when the button is clicked
                        setSelectedImg(null);
                    }}
                >
                    X
                </button>
                <img src={selectedImg} alt="Selected" style={{ maxWidth: '800px', maxHeight: '800px', objectFit: 'cover' }} />
            </div>
        </div>
    );
}

export default ImageModal;
