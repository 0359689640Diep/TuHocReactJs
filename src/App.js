// import clsx
import clsx from "clsx";

import GlobalStyle  from "./components/GlobalStyle";
import Button from "./components/Button";
function App() {
  return (
    <GlobalStyle>
    <div style={{padding: "60px 45px"}}>
        <Button ></Button>
        <Button primary></Button>
    </div>
    </GlobalStyle>

  );
}

export default App;
