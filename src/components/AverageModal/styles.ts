import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;

h4 {
    margin-bottom:10px; 
  }
`;

export const Content = styled.div`
  background: var(--background);
  padding: 0.3rem 0.3rem;
  border-radius: 5px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 2px;
  padding: 2px 10px;

  & + div{
    margin-top: 5px;
  }
`;
