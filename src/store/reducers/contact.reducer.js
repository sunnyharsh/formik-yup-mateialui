import { FORM_DATA } from "../action.types";

const initState = [];

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case FORM_DATA:
            state=state.concat(values)
            console.log(values, "++++",state)
            return state;
        default:
            return state;
    }
};

export default reducers;