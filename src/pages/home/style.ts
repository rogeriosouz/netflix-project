import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Container = styled.section`
  width: 100%;
  background-color: ${theme.colors.backGrundColor};
`;

export const ContentListFilm = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.white};
    padding-top: 20px;
    display: block;
    width: 90%;
    margin: auto;
  }
`;

type BackgrundRandom = {
  backdropPath: string,
}

export const ContainerDestaque = styled.div<BackgrundRandom>`
  width: 100%;
  min-height: 80vh;
  background-image: linear-gradient(to top, #111 10%, transparent 90%), url(${props => props.backdropPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.white};


  @media (max-width: 420px) {
    min-height: 70vh;
  }
`;

export const ContentContainerDestaque = styled.div`
  width: 100%;
  background: linear-gradient(to right, #111, transparent);
  height: 80vh;

  @media (max-width: 420px) {
    min-height: 70vh;
  }
`;