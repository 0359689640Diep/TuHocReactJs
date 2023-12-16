import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
            {/* Link: tuyến đường được định nghĩa thay cho thẻ a để tránh bị reload lại trang web */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
         {/* path: là tuyến đường được định nghĩa ở thẻ a bên trên
      component: Là nơi để gọi componet khi khớp với đường đẫn
      */}
        <Route exact path="/" component={Home} />
        <Route path="/News" component={News} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
