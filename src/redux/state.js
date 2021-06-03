let RenderTree = () =>{
  console.log('state changed');
}

  let state = {
    MesagePage: {
      Refresh: '',
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
       NewMesTxt: '',
      MainNews: [
        { id: 1, news: 'wheather'},
        { id: 2, news: 'It is a beautiful day'},
        { id: 3, news: 'Mix mix mix'},
        { id: 4, news: 'outsideß'}
      ]
     }
  }
   const Add_News = (something) => {
    let News ={
      id: 5,
      news: something
       };
    state.NewsPage.MainNews.push(News)
    state.NewsPage.NewMesTxt = '';
    RenderTree(state);
   };

   const Update_News = (updated) => {
      state.NewsPage.NewMesTxt = updated;
      RenderTree(state);
    };

    const Add_Message = (AddedMess) =>{
      let New_Mess = {
        id: 5,
        message: AddedMess
      };
      state.MesagePage.DialTxt.push(New_Mess);
      state.MesagePage.Refresh = '';
      RenderTree(state);
    }
    
    const Update_Messages = (upd) => {
      state.MesagePage.Refresh = upd;
      RenderTree(state);
    };

    const Subscribe = (Observer) =>{
      RenderTree = Observer;
    }

  export {state, Add_News, Update_News, Add_Message, Update_Messages, Subscribe};