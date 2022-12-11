import styled from "styled-components";

export const ContainerNotFound = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  img {
    max-width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    svg {
      font-size: 1.1875rem;
    }
  }
`;
