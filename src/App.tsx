import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />

      <Route
        path="*"
        element={
          <p className="text-9xl text-green-700 text-center">NOT FOUND</p>
        }
      />
    </Routes>
  );
}
