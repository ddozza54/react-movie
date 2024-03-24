import styled from 'styled-components';
import { getMoives, makeImagePath } from '../utils';
import { motion } from 'framer-motion';
import goodPepe from '../assets/goodPepe.png';

export default function ComingSoon() {
    const { data, isFetching } = getMoives('coming-soon')
    return (
        <>
            {isFetching ? <span>Loading..</span> :

                <>
                    <Banner
                        bgPhoto={makeImagePath(data?.results[15].backdrop_path || "")}
                    >
                        <h3 className='font-extrabold text-4xl'>{data?.results[15].title}</h3>
                        <span>{data?.results[0].overview}</span>
                        <div className='w-full flex justify-end'>
                            <span className='text-xl text-green-500'>Pepe's Choice</span>
                            <img src={goodPepe} className='w-40 ' />
                        </div>
                    </Banner>
                    <MoviesBox>
                        {data?.results.map(movie => <div key={movie.id} className='p-3 flex flex-col justify-center items-center' >
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

const Banner = styled.div<{ bgPhoto: string }>`
width: auto;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0 0 60px;
  margin-bottom: 5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

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

