import React, { createRef, useDebugValue } from 'react';
const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id} />)
  return (
    <div>
      {TodayNews}
      <NewAdd dispath={props.dispath} NewMesTxt={props.NewMesTxt} dispath={props.dispath} />
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
    props.dispath({ type: 'NEWS_ADD' });
  }

  let UpdateNews = () => {
    let text = NewsElem.current.value;
    props.dispath({ type: 'UPDATE_NEWS', txtnew: text });
  }

  return (
    <div>
      <button onClick={AddNews}>Add News</button>
      <textarea onChange={UpdateNews} ref={NewsElem} value={props.NewMesTxt}></textarea>
    </div>
  )
}

export default News;