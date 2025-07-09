import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import ShowResultPage from "./pages/ShowResultPage"
import ShortenPage from "./pages/ShortenPage"
import ValidationPage from "./pages/ValidationPage"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenPage />} />
        <Route path="/validate" element={<ValidationPage />} />
        <Route path="/results" element={<ShowResultPage />} />
      </Routes>
    </Router>
  )
}

export default App
