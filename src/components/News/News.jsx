import React, { createRef, useDebugValue } from 'react';
const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id} />)
  return (
    <div>
      {TodayNews}
      <NewAdd NewsAdd={props.NewsAdd} NewMesTxt={props.NewMesTxt} Update_News={props.Update_News} />
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
    props.NewsAdd();
  }

  let UpdateNews = () => {
    let text = NewsElem.current.value;
    props.Update_News(text);
  }

  return (
    <div>
      <button onClick={AddNews}>Add News</button>
      <textarea onChange={UpdateNews} ref={NewsElem} value={props.NewMesTxt}></textarea>
    </div>
  )
}

export default News;