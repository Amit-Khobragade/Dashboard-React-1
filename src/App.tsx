import "./App.css";
import Sidebar from "./components/Sidebar.component";
import MainContent from "./components/MainContent.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app w-screen h-screen">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<MainContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
