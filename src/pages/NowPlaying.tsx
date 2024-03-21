import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { motion } from 'framer-motion';
import goodPepe from '../assets/goodPepe.png';
interface Movies {
    results: Movie[],
}
interface Movie {
    adult: false,
    backdrop_path: "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
    id: 624091,
    original_language: "id",
    original_title: "Sri Asih",
    overview: "Alana discover the truth about her origi: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger."
    popularity: 1288.752
    poster_path: "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg"
    release_date: "2023-07-01"
    title: "Sri Asih"
    vote_average: 6.4
}

export default function NowPlaying() {
    const API_KEY = '335df83d9ee91cda767206351426b250';
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=kr';
    const getMovies = () => fetch(`${url}&api_key=${API_KEY}`).then(res => res.json());
    const { data, isFetching } = useQuery<Movies>({ queryKey: ['popularMoives'], queryFn: getMovies })
    return (
        <>
            {isFetching ? <span>Loading..</span> :

                <>
                    <Banner
                        bgPhoto={makeImagePath(data?.results[2].backdrop_path || "")}
                    >
                        <h3 className='font-extrabold text-4xl'>{data?.results[2].title}</h3>
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

