export interface Movies {
  results: MovieInterface[];
}
export interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  title: string;
  vote_average: number;
}
