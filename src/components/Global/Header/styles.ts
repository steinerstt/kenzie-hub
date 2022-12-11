import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding: 2.8125rem 0;
  border-top: 0.0625rem solid var(--color-gray-1);
  border-bottom: 0.0625rem solid var(--color-gray-1);

  .container__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: var(--sz-title-2);
    }

    p {
      font-size: var(--sz-text-2);
      color: var(--color-gray-3);
    }
  }
`;
