import styled from 'styled-components';

export const ConatinerListFilms = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 100%;
  margin: auto;
`;

export const ContainerFlexSlider = styled.div`
  width: 100%;
  height: 250px;
  overflow-x: hidden;
  padding-left: 30px;
  position: relative;
  button {
    transition: opacity 0.2s linear;
  }
  :hover {
    button {
      opacity: 1;
    }
  }
`;


export const ButtonLeft = styled.button`
  position: absolute;
  width: 40px;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  height: 225px;
  z-index: 2;
`;

export const ButtonRight = styled.button`
  position: absolute;
  width: 40px;
  right: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  height: 225px;
  z-index: 2;
`;

export const ContainerImgs = styled.div`
  transition: all ease 0.5s;
`;

export const MoveRowItem = styled.div`
  display: inline-block;
  width: 150px;
  height: 220px;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all 0.1s linear;
    cursor: pointer;
    height: 100%;
    :hover {
      transform: scale(1);
    }
  }
`;

