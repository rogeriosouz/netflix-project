import { BsFillPlayFill, IoIosAdd } from 'react-icons/all';
import {
  Buttons,
  Content, Description, DestaqueSection,
  Pontos,
  Pontuacao
} from './style';

type TypeRandomFilm = {
  backdrop_path: string,
  title: string,
  vote_average: number,
  overview: string,
  first_air_date: string,
  name: string,
  number_of_seasons: number,
  genres: any
}

type TypeFilmRandom = {
  filmRandom: TypeRandomFilm
}


export function Destaque({ filmRandom }: TypeFilmRandom) {
  let fisteDate; 
  let genres: any = [];
  if(filmRandom) {
    fisteDate = new Date(filmRandom.first_air_date);
    filmRandom.genres.map((genre: any) => {
      genres.push(genre.name);
    })
  }

  return (
    <DestaqueSection>
      {filmRandom && (
        <Content>
          <h1>{filmRandom.title ? filmRandom.title : filmRandom.name}</h1>
          <Pontuacao>
            <Pontos>{filmRandom.vote_average} pontos</Pontos>
            <p>{filmRandom.first_air_date ? fisteDate?.getFullYear() : ''}</p>
            <p>{filmRandom.number_of_seasons === 1 ? `${filmRandom.number_of_seasons} temporada`: `${filmRandom.number_of_seasons} temporadas` }</p>
          </Pontuacao>

          <Description>{filmRandom.overview}</Description>

          <Buttons>
            <button>
              <BsFillPlayFill color='#000' fontSize={24}/>
              assistir
            </button>
            <button style={{
              backgroundColor: '#525252',
              color: '#fff',
            }}>
              <IoIosAdd color='#fff' fontSize={24}/>
              minha Lista
            </button>
          </Buttons>

          <div style={{
              display: 'flex',
              fontSize: '1.5rem',
            }}>Genero: {genres.map((item: any, index: number) => (
            <p key={index} style={{
              marginRight: '3px'
            }}>{item},</p>
          ))}</div>
        </Content>
      )}
    </DestaqueSection>
  );
}