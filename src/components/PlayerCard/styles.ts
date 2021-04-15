import styled from "styled-components";


export const Container = styled.div`
  background: var(--gray-100);
  border-radius: 5px;
  padding: 1rem;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  margin: 1.2rem 0;
`;

export const Content = styled.div`
  display: flex;

  
  p {
    font-weight: bold;
    margin-right: 8px;
  }

  strong {
    color: var(--pink-300);
  }
`;