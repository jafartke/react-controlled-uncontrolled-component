import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Controlled from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Controlled />
  </StrictMode>,
  rootElement
);
