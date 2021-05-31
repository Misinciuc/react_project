import Messages from "../components/Messages/Messages";
import { RenderTree } from "../Render";

  let state = {
    MesagePage: {
      DialConv: [
        { id: 1, name: 'Iurcik'},
        { id: 2, name: 'John'},
        { id: 3, name: 'Peter'},
        { id: 4, name: 'David'}
      ],
      DialTxt: [
        { id: 1, message: 'Hello people'},
        { id: 2, message: 'Just do it'},
        { id: 3, message: 'YO YO'},
        { id: 4, message: 'fifa'}
      ]
    },
     NewsPage: {
      MainNews: [
        { id: 1, news: 'wheather'},
        { id: 2, news: 'It is a beautiful day'},
        { id: 3, news: 'Mix mix mix'},
        { id: 4, news: 'outsideß'}
      ]
     }
     
  }
export let AddNews = (NewMess) => { 
 let Message = {
   id: 5,
   news: NewMess
 };
  state.NewsPage.MainNews.push(Message);
  debugger;
 RenderTree(state);

}
  export default state;