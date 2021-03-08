import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store from "./src/common/store";
import FullscreenLoader from "./src/components/fullScreenLoader";
import BottomNavigator from "./src/common/navigator";

export default function App() {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={<FullscreenLoader />} persistor={Store.persistor}>
        <BottomNavigator />
      </PersistGate>
    </Provider>
  );
}