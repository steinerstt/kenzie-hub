import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.375rem;

  button {
    &:first-child {
      width: 65%;
    }

    &:last-child {
      width: 35%;
    }
  }
`;
