import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 200px;
  min-height: 400px;

  svg {
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 0.3fr;
  grid-gap: 30px;
  align-content: center;
`;

export const Avatar = styled.div`
justify-self: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  color: var(--white);
  position: relative;
  width: 200px;

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }

  .dashed-avatar {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 2px dashed var(--purple-900);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .solid-avatar {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  strong {
    border-bottom: 2px solid var(--white);
    position: absolute;
    right: 0;
    top: 25%;
  }
`;
