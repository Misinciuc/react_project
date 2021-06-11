import React, { createRef, useDebugValue } from 'react';
import { News_AddActionCreator, UpdateNewsActionCreator } from '../../redux/News_Reducer'
const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id} />)
  return (
    <div>
      {TodayNews}
      <NewAdd dispatch={props.dispatch} NewMesTxt={props.NewMesTxt} />
    </div>
  );
}

const NewsComp = (props) => {
  return (
    <div className="news">
      <p>{props.news}</p>
    </div>
  )
}

const NewAdd = (props) => {
  let NewsElem = React.createRef();

  let AddNews = () => {
    props.dispatch(News_AddActionCreator());
  }

  let UpdateNews = () => {
    debugger;
    let text = NewsElem.current.value;
    props.dispatch(UpdateNewsActionCreator(text));
  }

  return (
    <div>
      <button onClick={AddNews}>Add News</button>
      <textarea onChange={UpdateNews} ref={NewsElem} value={props.NewMesTxt}></textarea>
    </div>
  )
}

export default News;