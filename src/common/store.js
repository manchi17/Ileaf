import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunkMiddleware from "redux-thunk";
import data from "../ducks/data";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});

const rootReducer = combineReducers({
  data,
});

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  compose(applyMiddleware(loggerMiddleware, thunkMiddleware))
);
const persistor = persistStore(store);

export default { store, persistor };