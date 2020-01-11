import { observable, action } from 'mobx';

class AppStore {

  @observable test = null;

  @action
  testFunc = (data) => {
    console.log(data)
  }

}

const appStore = new AppStore();

export default appStore;
