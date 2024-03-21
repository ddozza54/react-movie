import { Link, useMatch } from 'react-router-dom';
import pepeImg from '../assets/pepe-movie.jpg';
import popcornImg from '../assets/IMG_2356.png'
import styled from 'styled-components';
import { motion, useScroll } from "framer-motion"
import { useEffect } from 'react';

export default function Header() {
    const homeMatch = useMatch('/');
    const comingSoonMatch = useMatch('/coming-soon');
    const nowPlayingMatch = useMatch('/now-playing');

    return (
        <div className='bg-[#F0DFD5] w-full flex justify-between items-center'>
            <Link to='/'> <div>
                <img src={pepeImg} className='w-32' />
                <span className='font-bold text-2xl text-green-700'>PEPEPLIX</span>
            </div></Link>
            <nav className='font-bold w-[80%] relative'>
                <ul className='w-full flex justify-around items-center'>
                    <NavListItem>
                        <Link to={'/'}>POPULAR</Link>
                        {homeMatch && <PopcornImg layoutId='popcorn' src={popcornImg} />}
                    </NavListItem>
                    <NavListItem>
                        <Link to={'/coming-soon'}>
                            COMING SOON
                        </Link>
                        {comingSoonMatch && <PopcornImg layoutId='popcorn' src={popcornImg} />}
                    </NavListItem>
                    <NavListItem>
                        <Link to={'/now-playing'}>
                            NOW PLAYING
                        </Link>
                        {nowPlayingMatch && <PopcornImg layoutId='popcorn' src={popcornImg} />}
                    </NavListItem>
                </ul>
            </nav>
        </div>
    );
}

const NavListItem = styled.li`
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const PopcornImg = styled(motion.img)`
    width: 3rem;
`