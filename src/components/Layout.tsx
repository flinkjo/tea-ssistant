import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-orange-100 min-w-screen min-h-screen text-sky-800 font-rainyhearts text-2xl">
      <nav className="flex flex-row justify-between py-10 px-20 2xl:px-40">
        <Link to="/">
          <h1 className="text-indigo-300 text-7xl font-daydream">Tea-ssistant</h1>
        </Link>
      </nav>

      <main className="container mx-auto py-10 flex justify-center relative">
        <Outlet />
      </main>
    </div>
  );
}
