import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let pagesize = 3;
  let country = "us";
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pagesize={pagesize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pagesize={pagesize}
                country={country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pagesize={pagesize}
                country={country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pagesize={pagesize}
                country={country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pagesize={pagesize}
                country={country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pagesize={pagesize}
                country={country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pagesize={pagesize}
                country={country}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pagesize={pagesize}
                country={country}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
