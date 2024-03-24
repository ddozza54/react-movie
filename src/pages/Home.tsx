import styled from 'styled-components';
import { getMoives, makeImagePath } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useMatch, useNavigate } from 'react-router';
import Banner from '../components/Banner';

export default function Home() {
    const { data, isFetching } = getMoives('popular');
    const navigate = useNavigate();
    const moviePathMatch = useMatch('/movie/:movieId');
    const onMovieClick = (movieId: number) => {
        navigate(`/movie/${movieId}`);
    }
    const onCloseButtonClick = () => {
        navigate(-1);
    }
    const clickedMovie =
        moviePathMatch?.params.movieId &&
        data?.results.find((movie) => String(movie.id) == moviePathMatch.params.movieId);
    return (
        <>
            {isFetching ? <span>Loading..</span> :
                <>
                    <Banner movieData={data?.results[0]} />
                    <AnimatePresence>
                        {moviePathMatch &&
                            <ModalBackground>
                                <ClosedButton onClick={onCloseButtonClick}>
                                    <svg className='text-green-400 absolute right-2 top-2' width={40} data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"></path>
                                    </svg>
                                </ClosedButton>

                                <MovieModal className='flex flex-col rounded-md'
                                    layoutId={moviePathMatch.params.movieId}>
                                    {clickedMovie && (
                                        <>
                                            <BigCover style={{ backgroundImage: `linear-gradient(to top, black, transparent),url(${makeImagePath(clickedMovie.backdrop_path)})` }} />
                                            <h4 className='font-semibold text-xl'>{clickedMovie.title}</h4>
                                            <p>{clickedMovie.overview}</p>
                                        </>
                                    )}
                                </MovieModal>
                            </ModalBackground>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        <MoviesBox>
                            {data?.results.map(movie =>
                                <Movie key={movie.id}
                                    layoutId={String(movie.id)}
                                    onClick={() => onMovieClick(movie.id)} >
                                    <MovieImg src={makeImagePath(String(movie.poster_path))}
                                        whileHover={{ scale: 1.1 }} />
                                    <h4 className='w-full font-bold'>{movie.title}</h4>
                                </Movie>)}
                        </MoviesBox>
                    </AnimatePresence>
                </>
            }

        </>
    );
}



const MoviesBox = styled.div`
    display:flex ;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    `

const MovieImg = styled(motion.img)`
width: 13rem;
border-radius: 20px;
&:hover{
    cursor: pointer;
}
`;

const Movie = styled(motion.div)`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const MovieModal = styled(motion.div)`
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
const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(1, 1, 1,0.8);
    z-index: 10;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ClosedButton = styled.button`
    
`;
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;