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
  NewsAdd() {
    let newtxt = {
      id: 5,
      news: this._state.NewsPage.NewMesTxt
    };
    this._state.NewsPage.MainNews.push(newtxt);
    this._state.NewsPage.NewMesTxt = '';
    this.RenderTree(this._state);
  },
  Update_News(fignea) {
    this._state.NewsPage.NewMesTxt = fignea;
    this.RenderTree(this._state);
  },
  Message_Add() {
    let insert = {
      id: 5,
      message: this._state.MesagePage.Refresh
    }
    this._state.MesagePage.DialTxt.push(insert);
    this._state.MesagePage.Refresh = '';
    this.RenderTree(this._state);
  },
  Message_Update(mess) {
    this._state.MesagePage.Refresh = mess;
    this.RenderTree(this._state);
  },
  subscribe(observer) {
    this.RenderTree = observer;
  }
}
export default store;