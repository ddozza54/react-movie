import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
interface Movie {
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: Date,
    title: string,
    vote_average: number
}


