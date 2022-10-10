import { Routes, Route } from "react-router-dom";
import { HomePage } from "./features/components/HomePage";
import { Pagination } from "./features/components/Pagination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
