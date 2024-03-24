import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { MovieInterface } from '../api';

export default function MovieModal({ laoutId, clickedMovie }) {
    const navigate = useNavigate();
    const onCloseButtonClick = () => {
        navigate(-1);
    }
    return (
        <>
            <Modal className='flex flex-col rounded-md'
                layoutId={laoutId}>
                <ClosedButton onClick={onCloseButtonClick}>
                    <svg className='text-green-400 absolute right-2 top-2' width={40} data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"></path>
                    </svg>
                </ClosedButton>
                {clickedMovie && (
                    <>
                        <BigCover style={{ backgroundImage: `linear-gradient(to top, black, transparent),url(${makeImagePath(clickedMovie.backdrop_path)})` }} />
                        <h4 className='font-semibold text-xl'>{clickedMovie.title}</h4>
                        <p>{clickedMovie.overview}</p>
                    </>
                )}
            </Modal>
        </>
    );
}



const Modal = styled(motion.div)`
width: 60%;
height: 80%;
background-color: lavender;
/* position: fixed; */
top: 10%;
left: 20%;
background-color:#488100 ;
display: flex;
flex-direction: column;
`
const ClosedButton = styled.button`
    
`;
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;