import styled from "styled-components";

export const ContainerModal = styled.div`
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

export const ModalContent = styled.div`
  width: 90%;
  max-width: 26rem;
  border-radius: var(--bd-radius);
  overflow: hidden;
  box-sizing: border-box;
`;

export const ModalHeader = styled.div`
  padding: 1rem 1.375rem;
  background-color: var(--color-gray-2);
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.300rem;

    svg {
      font-size: 1.375rem;
      color: var(--color-gray-3);
    }
  }
`;

export const ModalBody = styled.div`
  form {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: inherit;
  }
`;
