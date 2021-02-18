import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import todoReducer from '../reducers/todo/reducer'

const rootReducer = combineReducers({
  todo: todoReducer
})

// const middleware = compose(applyMiddleware(thunk))
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

export default store;