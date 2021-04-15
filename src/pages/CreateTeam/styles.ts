import styled from "styled-components";

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
    color: var(--white);
    font-weight: bold;
    border: transparent;
    height: 2.5rem;

    margin: 1rem 0;
  }
`;

export const FormationField = styled.div`
  background: var(--gradiente-button);
  position: relative;
  min-height: 500px;
  margin-top: 1.5rem;

  &::after{
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: var(--gray-300);
    top: 50%;
  }

  &::before{
    content: "";
    position: absolute;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--gray-300);
    width: 100px;
    right: 39%;
    top: 200px;
  }
`;