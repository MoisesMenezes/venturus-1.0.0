import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  /* height: 500px;
  width:  500px; */
  width: 100%;
  border-radius: 1rem;
`;

export const Header = styled.header`
  display: flex;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--gray-300);
  justify-content: space-between;

  h2 {
    color: var(--purple-900);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--gradiente-button);
    width: 35px;
    height: 35px;
    border-color: transparent;
    border-radius: 20%;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
