import "./App.css";
import Sidebar from "components/Sidebar.component";
import GlobalVars from "globals/global.variables";
import Homepage from "pages/Homepage.page";
import LiveSessionsPage from "pages/LiveSessions.page";
import RecSessionsPage from "pages/RecSessions.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app w-screen h-screen bg-primary flex">
        <Sidebar />
        <Routes>
          <Route path={GlobalVars.routes.pages.home} element={<Homepage />} />
          <Route path={GlobalVars.routes.pages.liveSessions} element={<LiveSessionsPage />} />
          <Route path={GlobalVars.routes.pages.recordedSessions} element={<RecSessionsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
