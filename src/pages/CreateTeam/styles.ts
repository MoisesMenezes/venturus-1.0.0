import styled from "styled-components";
import bgFootbal from "../../assets/bgfootballx.png";

export const Container = styled.div`
    padding: 2rem 3.5rem;
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
  display: relative;
  margin-bottom: 3rem;

  input:focus,
  select:focus,
  textarea:focus {
    border: solid 2px var(--pink-800);
    outline: none;
    box-shadow: none;
  }

  .validate-input{
    font-weight: bold;
    color: var(--red-500);
    margin-top: 0.3rem;
  }

  label {
    margin-bottom: 0.4rem;
  }

  textarea{
    height: 100%;
  }

  input,
  textarea,
  select {
    border: 2px solid var(--gray-400);
    border-radius: 5px;
  }

  input, select {
    height: 2.2rem;
    padding-left: 5px;
    font-size: 1rem;
  }

  textarea {
    padding: 0.2rem;
    max-width: 500px;
    font-size: 1rem;
  }

  .radio-buttons {
    display: flex;
    justify-content: space-between;
    width: 12rem;

    & div {
      display: flex;
      align-items: center;
    }

    input[type="radio"] {
      width: 20px;
    }

    label {
      margin: 0;
      padding-left: 12px;
    }
  }
`;

export const ContainerTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  button {
    align-self: center;
    background: var(--gradient);
    border: transparent;
    border-radius: 0.5rem;
    color: var(--white);
    font-weight: bold;
    height: 2.5rem;
    margin: 1rem 0;
    min-width: 400px;
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