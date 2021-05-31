import React, { useDebugValue } from 'react';

const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id}/>)
    return(
      <div>
      {TodayNews}
      <AddNews AddNews={props.AddNews} />
      </div>
    );
}


const NewsComp = (props) =>{
  return(
      <div className="news">
          <p>{props.news}</p>
      </div>
  )
}

const AddNews = (props) => {
  let Area = React.createRef();
  let Add = () => {
  let newtxt = Area.current.value;
    props.AddNews(newtxt);
  }
    return(
    <div>
      <button onClick={Add}>Add News</button>
      <textarea ref={Area}></textarea>
    </div>
  )
}

export default News;