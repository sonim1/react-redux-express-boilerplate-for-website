import { ADD_COUNT } from '../actions';

const initialState = {
    counter: 0,
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_COUNT:
        return Object.assign({}, state, { counter: state.counter + 1 });
    default:
        return state;
    }
}

export default counterReducer;
