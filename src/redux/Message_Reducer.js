
let initialstate = {
    Refresh: "enter message",
    DialConv: [
        { id: 1, name: "Iurcik" },
        { id: 2, name: "John" },
        { id: 3, name: "Peter" },
        { id: 4, name: "David" },
    ],
    DialTxt: [
        { id: 1, message: "Hello people" },
        { id: 2, message: "Just do it" },
        { id: 3, message: "YO YO" },
        { id: 4, message: "fifa" },
    ],
};

const MessageReducer = (state = initialstate, action) => {
    if (action.type === 'MESSAGE_ADD') {
        let insert = {
            id: 5,
            message: state.Refresh
        }
        state.DialTxt.push(insert);
        state.Refresh = '';
    } else if (action.type === 'MESSAGE_UPDATE') {
        state.Refresh = action.mess;
    }
    return state;
}

export const Message_AddActionCreator = () => {
    return {
        type: 'MESSAGE_ADD'
    }
}

export const Message_UpdateActionCreator = (mess) => {
    return {
        type: 'MESSAGE_UPDATE',
        mess: mess
    }
}

export default MessageReducer; 