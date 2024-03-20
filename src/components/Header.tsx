import { Link, useMatch } from 'react-router-dom';
import pepeImg from '../assets/pepe-movie.jpg';
import popcornImg from '../assets/IMG_2356.png'
export default function Header() {
    const homeMatch = useMatch('/');
    const comingSoonMatch = useMatch('/coming-soon');
    const nowPlayingMatch = useMatch('/now-playing');

    return (
        <div className='bg-[#F0DFD5] w-full flex justify-between items-center'>
            <div>
                <img src={pepeImg} className='w-32' />
                <span className='font-bold text-2xl text-green-700'>PEPEPLIX</span>
            </div>
            <nav className='font-bold w-[80%] '>
                <ul className='w-full flex justify-around items-center'>
                    <li>
                        <Link to={'/'}>POPULAR</Link>
                        {homeMatch && <img src={popcornImg} />}
                    </li>
                    <li>
                        <Link to={'/coming-soon'}>
                            COMING SOON
                        </Link>
                        {comingSoonMatch && <img src={popcornImg} />}
                    </li>
                    <li>
                        <Link to={'/now-playing'}>
                            NOW PLAYING
                        </Link>
                        {nowPlayingMatch && <img src={popcornImg} />}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

