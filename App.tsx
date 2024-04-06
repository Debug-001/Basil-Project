import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} /> {/* Assuming '/orders' is correct */}
      </Routes>
    </Router>
  );
}

export default App;