import styled from "styled-components";
import bgFootball from "../../assets/bgFootbal.png";
 
export const Container = styled.div`
    background-image: url('${bgFootball}'), var(--gradient);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 0.8rem;
    height: 20rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    align-content: center;
    margin-top: 1.5rem;
`;

export const AveragePlayer = styled.div`
  height: 100%;
  padding: 1rem  2rem; 
  justify-self:center;

  h4 {
    color: var(--white);
  }
`;

export const PlayerArea = styled.div`
  color: var(--white);
  display: flex;
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
    height: 25px;
    margin: 10px 0 0 10px;
  }
`;
