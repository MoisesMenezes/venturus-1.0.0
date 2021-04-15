import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    padding: 1rem 0.8rem;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      tr {
        background: var(--gray-300);

        &:hover{
          background: var(--pink-100);
          color: var(--pink-500);
        }
        td {
          padding: 1rem 1.5rem;
          border: 0;
        }
      }
    }
  }

  svg {
    margin: 0 5px;
  }
`;
