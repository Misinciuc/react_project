
let initialstate = {
    NewMesTxt: "news",
    MainNews: [
        { id: 1, news: "wheather" },
        { id: 2, news: "It is a beautiful day" },
        { id: 3, news: "Mix mix mix" },
        { id: 4, news: "outsideß" },
    ],
};

const NewsReducer = (state = initialstate, action) => {
    if (action.type === 'NEWS_ADD') {
        let newtxt = {
            id: 5,
            news: state.NewMesTxt
        };
        state.MainNews.push(newtxt);
        state.NewMesTxt = '';
    } else if (action.type === 'UPDATE_NEWS') {
        state.NewMesTxt = action.txtnew;
    }
    return state;
};

export const News_AddActionCreator = () => {
    return {
        type: 'NEWS_ADD'
    }
}

export const UpdateNewsActionCreator = (text) => {
    return {
        type: 'UPDATE_NEWS',
        txtnew: text
    }
}

export default NewsReducer;