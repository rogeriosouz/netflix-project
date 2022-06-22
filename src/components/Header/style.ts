import styled from 'styled-components';

type TypeCorHeader = {
  blackHeader: boolean
}

export const Heade = styled.div<TypeCorHeader>`
  width: 100%;
  height: 50px;
  background-color: ${props => props.blackHeader ? '#000' : 'transparent'};
  position: fixed;
  z-index: 3;
  transition: all ease 0.3s;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  color: #000;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  h1 {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
  }


  div {
    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.2s linear;
      :hover {
        transform: scale(1.1);
      }
    }
  }

`;