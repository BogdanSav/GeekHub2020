import { createStore ,applyMiddleware } from 'redux';
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { sagasWatcher} from "./actionCreators/sagas";

const saga = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(thunk ,saga));

saga.run(sagasWatcher);

export default store;