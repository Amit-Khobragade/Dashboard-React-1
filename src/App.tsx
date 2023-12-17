import "./App.css";
import Sidebar from "components/Sidebar.component";
import Homepage from "pages/Homepage.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app w-screen h-screen bg-primary flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
