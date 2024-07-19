import { Route, Routes } from "react-router-dom";
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
        element={
          <p className="text-9xl text-red-400 text-center font-rainyhearts">
            Not Found
          </p>
        }
      />
    </Routes>
  );
}
