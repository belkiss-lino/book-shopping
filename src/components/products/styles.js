import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 40px 0 40px 0px;
  grid-row-gap: 20px;
  background: #E6E6FA;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
