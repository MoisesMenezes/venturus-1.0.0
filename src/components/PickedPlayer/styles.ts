import styled from "styled-components";

export const Container = styled.div`
  background: var(--gradiente-button);
  border-radius: 9px;
  position: relative;
  
  width: 100%;
  height: 300px;

  &::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background: var(--gray-300);
    right: 50%;
    top: 0;
  }

  &::before{
    content: "";
    position: absolute;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--gray-300);
    width: 100px;
    right: 46%;
    top: 100px;
  }
`;

export const Content = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-around;
`;

export const Avatar = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  color: var(--white);
  position: relative;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  .dashed-avatar {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 2px dashed var(--purple-900);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

    }

    .solid-avatar {
      width: 140px;
      height: 140px;
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
    top: 20%;
  }
`;
