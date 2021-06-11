import React, { createRef, useDebugValue } from 'react';
import { connect } from 'react-redux';
import { News_AddActionCreator, UpdateNewsActionCreator } from '../../redux/News_Reducer';
import News from './News';



let mapStateToProps = (state) => {
  debugger;
  return {
    NewsPage: state.NewsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNews: (text) => {
      dispatch(UpdateNewsActionCreator(text))
    },
  AddNews: () => {
    dispatch(News_AddActionCreator());
  }
  }
} 

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
