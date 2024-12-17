import { Link } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
      </nav>
    </div>
  )
}

export default App
