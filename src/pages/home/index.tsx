import { useEffect, useState } from 'react';
import { Destaque } from '../../components/Destaque';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ListFilms } from '../../components/ListFilms';

import apiTmdb from '../../services/apiTmdb';

import {
  Container,
  ContainerDestaque,
  ContentContainerDestaque,
  ContentListFilm
} from './style';

type FimesTmdb = {
  slug: string,
  title: string,
  items: any
}

type TypeRandomFilm = {
  backdrop_path: string,
  vote_average: number,
  overview: string,
  title: string,
  first_air_date: string,
  name: string,
  number_of_seasons: number,
  genres: any
}

export function Home() {
  const [filmes, setFilmes] = useState<FimesTmdb[]>([]);
  const [randomFilm, setRandomFilm] = useState<TypeRandomFilm>();

  useEffect(() => {
    async function getItems() {
      const items = await apiTmdb.getHomeList();
      setFilmes(items);
      
      // random film
      const numberRandom = Math.floor(Math.random() * items[0].items.results.length);
      let filmeRandom = items[0].items.results[numberRandom];
      let filmeRandomInfo = await apiTmdb.getMovieInfo(filmeRandom.id, 'tv');
      setRandomFilm(filmeRandomInfo as TypeRandomFilm);
    } 
    
    getItems();
  }, []);


  return (
    <>
      {randomFilm && (
        <ContainerDestaque backdropPath={`https://image.tmdb.org/t/p/original${randomFilm?.backdrop_path}`}>
          <ContentContainerDestaque>
            <Header />
            <Destaque filmRandom={randomFilm as TypeRandomFilm}/>
          </ContentContainerDestaque>
        </ContainerDestaque>
      )}
      <Container>
          {filmes.map((filme, index: number) => (
            <ContentListFilm key={index}>
              <h2>{filme.title}</h2>
              <div>
                <ListFilms name={filme.slug} items={filme}/>
              </div>
            </ContentListFilm>
          ))}
      </Container>
      <Footer />
    </>
  );
}