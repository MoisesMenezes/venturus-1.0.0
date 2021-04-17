import styled from "styled-components";
import bgFootbal from "../../assets/bgfootballx.png";

export const Container = styled.div`
    padding: 2rem;
`;

export const Modal = styled.div`
  background: var(--white);
  border-radius: 10px;
`;

export const HeaderTeam = styled.header`
  display: flex;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--gray-300);
  justify-content: space-between;

  h2 {
    color: var(--purple-900);
  }
`;

export const Form = styled.form`
  padding: 1rem 3rem 3rem 3rem;

  h3 {
    text-align: center;
    margin: 2.5rem 0;
    color: var(--gray-600);
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.4rem;
  }

  textarea{
    height: 100%;
  }

  input{
    &:focus{
      outline: none;
      border: 2px solid var(--pink-500);
    }
  }

  .radio-buttons {

  }
`;

export const ContainerTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;


  button {
    background: var(--gradient);
    border: transparent;
    color: var(--white);
    font-weight: bold;
    height: 2.5rem;
    margin: 1rem 0;
  }
`;

export const FormationField = styled.div`
  align-self: center;
  background-image: url('${bgFootbal}'), var(--gradient-horizontal);
  border-radius: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 40rem;
  margin-top: 2rem;
  width: 25rem;
`;