import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  height: 5rem;
  background: var(--gradient);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem;
  justify-content: space-between;
  color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

img {
    width: 50px;
  }

  h2 {
    padding-left: 0.8rem;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 1.5rem;
  }

  p {
    padding-right: 0.5rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    color: var(--gray-600);
    background: var(--gray-100);
  }

`;