import styled from "styled-components";

export const ContainerNav = styled.nav`
  padding: 1.25rem 0;

  .container__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.625rem;
    }
  }
`;
