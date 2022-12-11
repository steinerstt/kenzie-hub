import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  width?: string;
}

const handleCalWidth = (width: string) => {
  if (width?.includes("%")) {
    return width;
  } else if (width?.includes("px")) {
    const widthFormated = width.replace("px", "");
    return `${Number(widthFormated) / 16}rem`;
  }

  return `${width}rem`;
};

const ButtonBase = {
  css: css`
    font-family: "Inter", sans-serif;
    font-size: var(--sz-text-1);
    font-weight: var(--font-weg-4);
    color: var(--color-white);
    padding: 0.875rem;
    border-radius: var(--bd-radius);
    outline: none;
    border: none;
  `,
};

const ButtonsOptions = {
  primary: css`
    background-color: var(--color-primary);
    &:hover {
      background-color: var(--color-primary-focus);
    }
  `,

  secondary: css`
    background-color: var(--color-gray-3);
    &:hover {
      filter: brightness(0.9);
    }
  `,

  tertiary: css`
    background-color: var(--color-gray-1);
    &:hover {
      filter: brightness(0.9);
    }
  `,
};

export const Button = styled.button<iButtonProps>`
  ${() => ButtonBase.css};
  ${({ variant }) => ButtonsOptions[variant || "primary"]};
  width: ${({ width }) => width && handleCalWidth(width)};
`;

export const ButtonRedirect = styled(Link)<iButtonProps>`
  ${() => ButtonBase.css};
  ${({ variant }) => ButtonsOptions[variant || "primary"]};
  width: ${({ width }) => width && handleCalWidth(width)};
  display: block;
  text-align: center;
  text-decoration: none;
`;
