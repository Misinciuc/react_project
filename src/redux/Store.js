import MessageReducer from "./Message_Reducer";
import NewsReducer from "./News_Reducer";

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
  dispatch(action) {
    this._state.NewsPage = NewsReducer(this._state.NewsPage, action);
    this._state.MesagePage = MessageReducer(this._state.MesagePage, action);
    this.RenderTree(this._state);
  }
}

export default store;  