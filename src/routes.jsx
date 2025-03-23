import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DataPage from "./pages/DataPage";

const AppRoutes = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dataall" element={<DataPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
