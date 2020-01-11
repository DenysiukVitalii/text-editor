import styled, { css } from 'styled-components';

export const StyledTooltip = styled.span`
  position: relative;
`;

export const TooltipElement = styled.ul`
  position: absolute;
  height: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
  display: none;
  z-index: 4;
  list-style: none;
  font-size: 12px;
  bottom: 10px;
  left: 0;
  ${props => props.isShow && css`
    display: block;
  `}
`;
