import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage className="flex-1" />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
