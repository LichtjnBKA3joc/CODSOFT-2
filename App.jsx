import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/candidate" element={<CandidateDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
