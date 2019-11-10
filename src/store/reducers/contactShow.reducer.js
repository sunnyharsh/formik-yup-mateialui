import { CONTACT_SHOW } from "../action.types";

const initState = [];

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case CONTACT_SHOW:
            state=values
            // console.log(values, "++++",state)
            return state;
        default:
            return state;
    }
};

export default reducers;