import Heading from "./components/Heading";
import Paragaph from "./components/Paragraph";
import GlobalStyle  from "./components/GlobalStyle";
function App() {
  return (
    <div className="testCss">
    <GlobalStyle>
      <Heading></Heading>
      <Paragaph></Paragaph>
      <section className="d-flex">
        <span>Item1</span>
        <span>Item2</span>
      </section>
    </GlobalStyle>
    </div>
  );
}

export default App;
