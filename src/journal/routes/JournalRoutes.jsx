import { Navigate, Routes, Route } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />}></Route>

      <Route path="/*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
