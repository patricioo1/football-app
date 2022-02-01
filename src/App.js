import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
      <Header />
      <Main/>
      </Router>
    </div>
  );
}

export default App;
