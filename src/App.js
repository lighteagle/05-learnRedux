import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./component/CakeContainer";

import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
