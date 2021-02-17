import { combineReducers,createStore } from "redux";
import todoReducer from '../reducers/todo/reducer'

const rootReducer = combineReducers({
  todo: todoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,devTools)

export default store;