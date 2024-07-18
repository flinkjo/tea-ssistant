import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route
        path="*"
        element={<p className="text-9xl text-red-700 text-center">Not Found</p>}
      />
    </Routes>
  );
}
