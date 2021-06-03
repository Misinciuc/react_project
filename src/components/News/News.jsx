import React, { createRef, useDebugValue } from 'react';

const News = (props) => {
  let TodayNews = props.MainNews.map(elem => <NewsComp news={elem.news} id={elem.id}/>)
    return(
      <div>
      {TodayNews}
      <NewAdd Add_News={props.Add_News} Update_News={props.Update_News} NewMesTxt={props.NewMesTxt}/>
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
const NewAdd = (props) => {
  let textarea = React.createRef();
  let Add = () =>{
    let newtext = textarea.current.value;
    props.Add_News(newtext);
  };
  const OnNewsChange = () => {
      props.Update_News();
  };
    return(
    <div>
      <button onClick={Add}>Add News</button>
      <textarea onChange={OnNewsChange} ref={textarea} value={props.NewMesTxt}></textarea>
    </div>
  )
}

export default News;