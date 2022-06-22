import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/all';

import {
  ButtonLeft,
  ButtonRight,
  ConatinerListFilms,
  ContainerFlexSlider,
  ContainerImgs,
  MoveRowItem
} from './style';

type TypeFilms = {
  items: any,
  name: string
}

type Img = {
  poster_path: string
}

export function ListFilms({ items, name }: TypeFilms) {
  const [filmes, setFilmes] = useState([]);
  const [moveRow, setMoveRow] = useState(-400);

  useEffect(() => {
    if(items.slug === name) {
      setFilmes(items.items.results);
    }
  }, []);
  
  
  function hedleLeftArrow() {
    let x = moveRow + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0
    }
    setMoveRow(x);
  }

  function hedleRightArrow() {
    let x = moveRow - Math.round(window.innerWidth / 2);;
    let listW = filmes.length * 150;

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setMoveRow(x)
  }

  return (
    <>
      <ConatinerListFilms>
        <ContainerFlexSlider>
            <ButtonLeft onClick={() => hedleLeftArrow()}>
              <FiChevronLeft fontSize={40} color='#fff'/>
            </ButtonLeft>
            
            <ButtonRight onClick={() => hedleRightArrow()}>
              <FiChevronRight fontSize={40} color='#fff' />
            </ButtonRight>
            
          <ContainerImgs style={{
            marginLeft: moveRow,
            width: filmes.length * 150,
          }}>
            {filmes.length > 0 && (
              <>
                {filmes.map((img: Img, index: number) => {
                  if (img.poster_path) {
                    return (
                      <MoveRowItem key={index}>
                        <img key={index} className='imgs' src={`https://image.tmdb.org/t/p/w400${img.poster_path}`}/>
                      </MoveRowItem>
                    )}
                  }
                )}    
              </>
            )}
          </ContainerImgs>
        </ContainerFlexSlider>
      </ConatinerListFilms>
    </>
  );
}