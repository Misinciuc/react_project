import { RenderTree } from "../render";

export let state = {
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
}

export const NewsAdd = () => {
  let newtxt = {
    id: 5,
    news: state.NewsPage.NewMesTxt
  };
  state.NewsPage.MainNews.push(newtxt);
  state.NewsPage.NewMesTxt = '';
  RenderTree(state);
}

export const Update_News = (fignea) => {
  state.NewsPage.NewMesTxt = fignea;
  RenderTree(state);
}

export const Message_Add = () => {
  let insert = {
    id: 5,
    message: state.MesagePage.Refresh
  }
  state.MesagePage.DialTxt.push(insert);
  state.MesagePage.Refresh = '';
  RenderTree(state);
}

export const Message_Update = (mess) => {
  state.MesagePage.Refresh = mess;
  RenderTree(state);
}