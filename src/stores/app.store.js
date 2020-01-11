import { observable, action } from 'mobx';

class AppStore {

  @observable currentStyle = [];
  @observable currentWord = null;
  @observable currentSynonyms = [];

  @action
  changeStyle = style => {
    if (this.currentWord) {
      this.currentWord.classList.toggle(style);
    } else if (this.currentStyle.includes(style)) {
      this.currentStyle = this.currentStyle.filter(i => i !== style);
    } else {
      this.currentStyle = [...this.currentStyle, style];
    }
  }

  @action
  selectWord = word => {
    this.currentWord = word;
  }

  @action
  removeSelections = () => {
    this.currentWord = null;
  }

  @action
  getSynonyms = word => {
    fetch(`https://api.datamuse.com/words?ml=${word}`)
      .then(res => res.json())
      .then(res => this.currentSynonyms = res.splice(0,4).map(i => i.word))
  }

  @action
  clearSynonyms = () => {
    this.currentSynonyms = [];
  }
 
}

const appStore = new AppStore();

export default appStore;
