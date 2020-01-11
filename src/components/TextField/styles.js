import styled, { css } from 'styled-components';

export const StyledTextField = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Textarea = styled.div`
  width: 500px;
  height: 300px;
  outline: none;
  resize: none;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;

  ${props => props.currentStyle.includes('bold') && css`
    font-weight: bold;
  `}
  ${props => props.currentStyle.includes('italic') && css`
    font-style: italic;
  `}
  ${props => props.currentStyle.includes('underline') && css`
    text-decoration: underline;
  `}

  span {
    line-height: 24px;
  }

  span.bold {
    font-weight: bold;
  }
  span.italic {
    font-style: italic;
  }
  span.underline {
    text-decoration: underline;
  }
`;