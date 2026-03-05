import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

function Layout() {
  return (
    <div className="flex h-screen bg-nBlack overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-60 min-h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto pt-16 px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
