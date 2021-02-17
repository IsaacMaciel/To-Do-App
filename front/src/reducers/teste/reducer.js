import { todoTypes } from "../todo/types";

const INITIAL_STATE = {
  called: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.DESCRIPTION_CHANGED:
      return { called: !state.called };

    default:
      return state;
  }
};
