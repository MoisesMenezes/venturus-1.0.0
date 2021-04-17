import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  border-radius: 1rem;
`;

export const Header = styled.header`
  display: flex;
  padding: 2rem 2rem;
  border-bottom: 1px solid var(--gray-300);
  justify-content: space-between;

  h2 {
    color: var(--purple-900);
  }

  button {
    background: var(--gradiente-button);
    width: 45px;
    height: 45px;
    border-color: transparent;
    border-radius: 25%;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    a {
      display: flex;
      justify-content: center;
    }
  }
`;
