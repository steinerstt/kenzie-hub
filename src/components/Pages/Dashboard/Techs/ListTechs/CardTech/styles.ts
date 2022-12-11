import styled from "styled-components";

export const ContainerCardTech = styled.li`
  padding: 0.875rem 1.375rem;
  background-color: var(--color-gray-0);
  border-radius: var(--bd-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-weight: var(--font-weg-3);
  }
`;

export const ContainerStatusTrash = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--color-gray-3);
    font-size: var(--sz-text-2);
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.25rem;

    svg {
      color: var(--color-gray-4);
      font-size: 1.375rem;
    }
  }
`;
