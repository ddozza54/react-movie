import { Link } from 'react-router-dom';
import pepeImg from '../assets/pepe-movie.jpg'
export default function Header() {
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
                    </li>
                    <li>
                        <Link to={'/coming-soon'}>
                            COMING SOON
                        </Link>
                    </li>
                    <li>
                        <Link to={'/now-playing'}>
                            NOW PLAYING
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

