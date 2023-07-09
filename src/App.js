import Home from "./routes/home/home.component";
import { Routes, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
