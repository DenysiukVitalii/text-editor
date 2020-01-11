import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Tooltip } from '/src/components';
import { StyledTextField, Textarea } from './styles';

@inject(({ appStore }) => ({
  currentStyle: appStore.currentStyle,
  selectWord: appStore.selectWord,
  removeSelections: appStore.removeSelections,
  getSynonyms: appStore.getSynonyms,
  currentSynonyms: appStore.currentSynonyms,
  clearSynonyms: appStore.clearSynonyms
}))
@observer
class TextField extends Component {

  state = {
    text: [],
    isShowTooltip: null
  } 

  componentDidMount() {
    const editable = document.getElementById('text');
    editable.addEventListener('input', e => {
      console.log(editable.innerHTML);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.setState(() => ({ text: this.props.text }));
    }
  }

  getSynonyms = (e, idx) => {
    e.preventDefault();
    this.props.getSynonyms(e.target.innerHTML);
    this.setState(() => ({ isShowTooltip: idx }))
  }

  selectWord = (e) => {
    e.preventDefault();
    this.props.selectWord(e.target);
  }

  render() {
    const { currentStyle, removeSelections, clearSynonyms, currentSynonyms } = this.props;
    const { text, isShowTooltip } = this.state;

    return (
      <StyledTextField>
        <Textarea
          id="text"
          contentEditable
          suppressContentEditableWarning
          currentStyle={currentStyle}
          onClick={() => { removeSelections(); clearSynonyms(); }}
        >
          {
            text
              ? text.map((i, idx) => (
                  <span key={idx}>
                    <Tooltip text={currentSynonyms} isShow={idx === isShowTooltip}>
                      <span onClick={e => this.getSynonyms(e, idx)} onDoubleClickCapture={this.selectWord}>{i} </span>
                    </Tooltip>
                  </span>
              ))
              : ''
          }
        </Textarea>
      </StyledTextField>
    );
  }
}

export default TextField;
