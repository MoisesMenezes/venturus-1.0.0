import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
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
`;
