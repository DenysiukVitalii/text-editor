import styled, { css } from 'styled-components';

export const StyledButton = styled.div`
  button {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 2px;
    ${props => props.isActive && css`
      border-color: #35c9ff;
    `}
  }
`;
