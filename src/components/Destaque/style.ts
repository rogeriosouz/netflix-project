import styled from 'styled-components';

export const DestaqueSection = styled.section`
  width: 100%;
  height: 58vh;
  margin: auto; 
  padding-top: 50px;
  @media (max-width: 420px) {
    height: 60vh;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 110px;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 10px;

    @media (max-width: 420px) {
      font-size: 4.4rem;
      margin-bottom: 15px;
    }
  }
`;

export const Pontuacao = styled.div`
  margin-bottom: 10px;
  font-size: 1.7rem;
  display: flex;

  @media (max-width: 420px) {
    font-size: 2.0rem;
    margin-bottom: 15px;
  }

  p {
    margin-right: 10px;
  }
`;

export const Pontos = styled.p`
  color: #0f0;
`;

export const Description = styled.div`
  width: 60%;
  margin-bottom: 10px;
  font-size: 1.7rem;

  @media (max-width: 420px) {
    font-size: 2.1rem;
    margin-bottom: 15px;
    width: 90%;
  }
`;

export const Buttons = styled.div`
  width: 90%;
  display: flex;

  button {
    width: 130px;
    height: 40px;
    font-size: 2.1rem;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  margin-bottom: 10px;
`;

