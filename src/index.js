import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import reducer from "./reducers";
import App from "./componets/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById("root"));
  </Provider>
);
registerServiceWorker();
