import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.component";
import MainContent from "./components/MainContent.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
