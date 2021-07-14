import { createStore } from 'redux';

//reducer--function
const stateReducer = (state = { count: 0}, actions) => {
    switch (actions.type) {
        case "increment":
            return {
                count: state.count + 1,
            };
        case "decrement":
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

//store
const store = createStore(stateReducer);

export default store;
