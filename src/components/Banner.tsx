import goodPepe from '../assets/goodPepe.png';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { MovieInterface } from '../types';

interface movieDataInterface {
    movieData: MovieInterface | undefined; // nullable 처리
}

export default function Banner({ movieData }: movieDataInterface) {
    return (
        <BannerBox
            bgphoto={makeImagePath(movieData?.backdrop_path || "")}
        >
            <h3 className='font-extrabold text-4xl'>{movieData?.title}</h3>
            <span>{movieData?.overview}</span>
            <div className='w-full flex justify-end'>
                <span className='text-xl text-green-500'>Pepe's Choice</span>
                <img src={goodPepe} className='w-40 ' />
            </div>
        </BannerBox>
    );
}

const BannerBox = styled.div<{ bgphoto: string }>`
width: auto;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0 0 60px;
  margin-bottom: 5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;
