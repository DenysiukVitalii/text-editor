import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from '/src/components';
import { StyledControlPanel, Actions } from './styles';

@inject(({ appStore }) => ({
  changeStyle: appStore.changeStyle,
  currentStyle: appStore.currentStyle
}))
@observer
class ControlPanel extends Component {
  render() {
    const { changeStyle, currentStyle } = this.props;

    return (
      <StyledControlPanel>
				<Actions>
          <Button
            label={<b>B</b>}
            isActive={currentStyle.includes('bold')}
            onClick={() => changeStyle('bold')}
          />
          <Button
            label={<i>I</i>}
            isActive={currentStyle.includes('italic')}
            onClick={() => changeStyle('italic')}
          />
          <Button
            label={<u>U</u>}
            isActive={currentStyle.includes('underline')}
            onClick={() => changeStyle('underline')}
          />
				</Actions>
      </StyledControlPanel>
    );
  }
}

export default ControlPanel;
