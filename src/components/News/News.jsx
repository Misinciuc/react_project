import React, { createRef, useDebugValue } from 'react';
import { News_AddActionCreator, UpdateNewsActionCreator } from '../../redux/News_Reducer'

const News = (props) => {
  debugger;
  let TodayNews = props.NewsPage.MainNews.map(elem =>
    <NewsComp news={elem.news} id={elem.id} />)
  return (
    <div>
      {TodayNews}
      <NewAdd NewMesTxt={props.NewsPage.NewMesTxt}
        AddNews={props.AddNews}
        UpdateNews={props.UpdateNews} />
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
  let onAddNews = () => {
    props.AddNews();
  }

  let onUpdateNews = () => {
    let text = NewsElem.current.value;
    props.UpdateNews(text)
  }
  return (
    <div>
      <button onClick={onAddNews}>Add News</button>
      <textarea onChange={onUpdateNews} ref={NewsElem} value={props.NewMesTxt}></textarea>
    </div>
  )
}

export default News;