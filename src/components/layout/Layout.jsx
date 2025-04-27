// Layout.jsx
import { Outlet } from "react-router-dom";
import "./layout.css";
import Navbar from "../nav/Nav";
function Layout() {
  return (
    <div className="layout">
        <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
