import { combineReducers, createStore } from "redux";
import MessageReducer from './Message_Reducer';
import NewsReducer from './News_Reducer';

let Reducers = combineReducers({
    NewsPage: NewsReducer,
    MesagePage: MessageReducer
});

let store = createStore(Reducers);

export default store;