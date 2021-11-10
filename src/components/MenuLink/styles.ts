import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: 1.8rem;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    position: relative;
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 0.2s ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  `}
`;
