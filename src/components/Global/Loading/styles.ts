import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Load = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  border: 0.3125rem solid var(--color-primary);
  border-radius: 0.875rem;
  animation: spin 0.9s infinite ease;

  @keyframes spin {
    from {
      transform: rotate(1turn);
    }
  }
`;
