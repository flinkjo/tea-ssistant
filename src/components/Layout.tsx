import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-orange-100 min-w-screen min-h-screen text-stone-800">
      <nav className="flex flex-row justify-between py-10 px-20 2xl:px-40">
        <Link to="/">
          <h1 className="text-lime-400 text-8xl">Tea-ssistant</h1>
        </Link>
      </nav>

      <main className="container mx-auto py-10 flex justify-center relative">
        <Outlet />
      </main>
    </div>
  );
}
