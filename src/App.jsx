import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col flex-1 bg-white dark:bg-zinc-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
