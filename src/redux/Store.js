let store = {
  _state: {
    MesagePage: {
      Refresh: "enter message",
      DialConv: [
        { id: 1, name: "Iurcik" },
        { id: 2, name: "John" },
        { id: 3, name: "Peter" },
        { id: 4, name: "David" },
      ],
      DialTxt: [
        { id: 1, message: "Hello people" },
        { id: 2, message: "Just do it" },
        { id: 3, message: "YO YO" },
        { id: 4, message: "fifa" },
      ],
    },
    NewsPage: {
      NewMesTxt: "news",
      MainNews: [
        { id: 1, news: "wheather" },
        { id: 2, news: "It is a beautiful day" },
        { id: 3, news: "Mix mix mix" },
        { id: 4, news: "outsideß" },
      ],
    },
  },
  getState() {
    return this._state
  },
  RenderTree() {
    console.log('change');
  },
  subscribe(observer) {
    this.RenderTree = observer;
  },
  dispath(action) {
    if (action.type === 'NEWS_ADD') {
      let newtxt = {
        id: 5,
        news: this._state.NewsPage.NewMesTxt
      };
      this._state.NewsPage.MainNews.push(newtxt);
      this._state.NewsPage.NewMesTxt = '';
      this.RenderTree(this._state);
    } else if (action.type === 'UPDATE_NEWS') {
      this._state.NewsPage.NewMesTxt = action.txtnew;
      this.RenderTree(this._state);
    } else if (action.type === 'MESSAGE_ADD') {
      let insert = {
        id: 5,
        message: this._state.MesagePage.Refresh
      }
      this._state.MesagePage.DialTxt.push(insert);
      this._state.MesagePage.Refresh = '';
      this.RenderTree(this._state);
    } else if (action.type === 'MESSAGE_UPDATE') {
      this._state.MesagePage.Refresh = action.mess;
      this.RenderTree(this._state);
    }

  }
}

export const News_AddActionCreator = () => {
  return {
    type: 'NEWS_ADD'
  }
}

export const UpdateNewsActionCreator = (text) => {
  return {
    type: 'UPDATE_NEWS',
    txtnew: text
  }
}

export const Message_AddActionCreator = () => {
  return {
    type: 'MESSAGE_ADD'
  }
}

export const Message_UpdateActionCreator = (mess) => {
  return {
    type: 'MESSAGE_UPDATE',
    mess: mess
  }
}
export default store;  