import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Forms from "./components/Forms";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home /> }></Route>
        <Route path="/Forms" element={<Forms/>}></Route>
        <Route path="/Resume" element={<Resume/>}></Route>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
