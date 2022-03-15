import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import GlobalStyle from './globalStyles'

const App = () => (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  )

export default App
