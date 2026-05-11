import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@/pages/home";
import ProjectsPage from "@/pages/projects";
import ExpertisePage from "@/pages/expertise";
import ApproachPage from "@/pages/approach";
import InsightsPage from "@/pages/insights";
import ContactPage from "@/pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
