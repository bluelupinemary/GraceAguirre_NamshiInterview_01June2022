import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Matrix from "./pages/Matrix";
import ShoppingHome from "./pages/ShoppingHome";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/matrix" element={<Matrix />}></Route>
        <Route path="/shopping" element={<ShoppingHome />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
