import React, { Component } from 'react';

import { StyledButton } from './styles';

class Button extends Component {
  render() {
    const { label, isActive, onClick } = this.props;
    return (
      <StyledButton isActive={isActive}>
        <button
          type="button"
          onClick={onClick}
        >
          {label}
        </button>
      </StyledButton>
    );
  }
}

export default Button;
