import React from 'react';
import { ImageModal as Modal, ModalButton, ModalImage} from './ImageModalStyles';
const ImageModal = ({ selectedImg, setSelectedImg }) => {
    if (!selectedImg) return null;

    return (
        <Modal onClick={() => setSelectedImg(null)}>
            <div style={{position: 'relative', display:'inline-block'}}>
                <ModalButton onClick={(e) => {
                    e.stopPropagation(); // This stops the modal from closing when the button is clicked
                    setSelectedImg(null);
                }}>
                    X
                </ModalButton>
                <ModalImage src={selectedImg} alt="Selected" />
            </div>
        </Modal>
    );
}

export default ImageModal;
