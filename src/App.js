import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:name" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
