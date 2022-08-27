import { BrowserRouter as Router,Route,Routes, } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Personal from "./pages/Personal/Personal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}

export default App;
