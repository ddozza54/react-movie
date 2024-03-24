import styled from 'styled-components';
import { getMoives, makeImagePath } from '../utils';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import Banner from '../components/Banner';

export default function NowPlaying() {
    const { data, isFetching } = getMoives('now-playing')
    const navigate = useNavigate();
    const onMovieClicked = (movieId: number) => {
        navigate(`/movie/${movieId}`)
    }
    return (
        <>
            {isFetching ? <span>Loading..</span> :
                <>
                    <Banner movieData={data?.results[2]} />
                    <MoviesBox>
                        {data?.results.map(movie =>
                            <div
                                onClick={() => onMovieClicked(movie.id)}
                                key={movie.id}
                                className='p-3 flex flex-col justify-center items-center' >
                                <MovieImg src={makeImagePath(String(movie.poster_path))}
                                    whileHover={{ scale: 1.1 }} />
                                <h4 className='font-bold'>{movie.title}</h4>
                            </div>)}
                    </MoviesBox>


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
width: 18rem;
border-radius: 20px;
`;

