import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/reducers/Store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
      <App /> 
  </BrowserRouter> 
  </Provider>   
  </StrictMode>,
  rootElement
);
