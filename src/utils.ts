import { useQuery } from '@tanstack/react-query';
import { Movies } from './types';

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${
    format ? format : 'original'
  }/${id}`;
}

type SortOfData = 'popular' | 'coming-soon' | 'now-playing';

export function getMoives(SortOfData: SortOfData) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  const url = `${baseUrl}/${
    SortOfData === 'coming-soon'
      ? 'upcoming'
      : SortOfData === 'now-playing'
      ? 'now_playing'
      : SortOfData
  }?language=en-US&page=1&region=kr&api_key=${API_KEY}`;
  const { data, isFetching } = useQuery<Movies>({
    queryKey: ['moives', SortOfData],
    queryFn: () =>
      fetch(`${url}&api_key=${API_KEY}`).then((res) =>
        res.json()
      ),
  });
  return { data, isFetching };
}
