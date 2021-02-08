import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import SheetsContainer from "./containers/SheetsContainer";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
