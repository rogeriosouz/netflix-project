import styled from 'styled-components';

export const DestaqueSection = styled.section`
  width: 100%;
  height: 80vh;
  margin: auto; 
  padding-top: 50px;
  @media (max-width: 420px) {
    height: 70vh;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 110px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;

    @media (max-width: 420px) {
      font-size: 4.4rem;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 420px) {
    min-height: 70vh;
  }
`;

export const Pontuacao = styled.div`
  margin-bottom: 10px;
  font-size: 1.7rem;
  display: flex;

  @media (max-width: 420px) {
    font-size: 2.0rem;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
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

