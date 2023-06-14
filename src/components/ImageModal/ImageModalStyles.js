import styled from 'styled-components';

export const ImageModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalButton = styled.button`
    position: absolute;
    top: 2.5px;
    right: 2.5px;
    background-color: #f7b2c2;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
`;

export const ModalImage = styled.img`
    object-fit: cover;
    max-width: 600px;
    max-height: 600px;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 50vw;
        max-height: 50vh;
    }
`;

// Define your theme
export const theme = {
    breakpoints: {
        md: '(max-width: 900px)',
        // add other breakpoints as you see fit
    }
}
