import React from 'react';

const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id}/>)
    return(
      <div>
      {TodayNews}
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

export default News;