import React, { Component } from 'react';

import { StyledTooltip, TooltipElement } from './styles';

class Tooltip extends Component {
  render() {
    const { children, text, isShow } = this.props;
    return (
      <StyledTooltip>
        {
          text.length
            ? (
              <TooltipElement isShow={isShow}>
              {text.map(i => <li key={i}>{i}</li>)}
            </TooltipElement>
            )
            : null
        }
        {children}
      </StyledTooltip>
    );
  }
}

export default Tooltip;
