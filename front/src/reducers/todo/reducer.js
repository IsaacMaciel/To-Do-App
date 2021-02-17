import { todoTypes } from "./types";

const INITIAL_STATE = {
  description: "",
  list: "",
  listSearch: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };

    case todoTypes.ADD_TASK:
      let list = [
        ...state.list,
        { _id: state.list.length + 1, task: action.payload, done: false },
      ];
      return { ...state, list };

    case todoTypes.DONE_TASK:
      const listFind = state.list.find((task) => task._id === action.payload);
      listFind.done = !listFind.done;
      return { ...state };

    case todoTypes.REMOVE_TASK:
      const newList = state.list.filter((task) => task._id !== action.payload);
      return { ...state, list: newList };

    // case todoTypes.SEARCH_TASK:
    //   const listSearch = state.list.filter((element) =>
    //     element.task.includes(action.payload.toLowerCase())
    //   );
    //   return { ...state, listSearch };
    default:
      return state;
  }
};
