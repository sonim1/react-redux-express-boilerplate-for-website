const initialState = {
    counter : 0
}

function counterReducer(state, action){
    if(typeof state === "undefined"){
        return initialState;
    }

    switch (action.type) {
        case "ADD":
            return Object.assign( {}, state, {counter : state.counter + 1});
        default:
            return state

    }
}

export default counterReducer;
