import styled from "styled-components";

export const Container = styled.div``;


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
