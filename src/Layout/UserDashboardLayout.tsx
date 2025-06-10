import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserDashboardHeader from "../components/UserDashboardHeader";
import Sidebar from "../components/Sidebar";


const UserDashboardLayout = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-screen w-screen max-w-[100vw] bg-red-900 max-h-[100vh] overflow-hidden flex">
      <Sidebar active={active} setActive={setActive} />
      <div className="w-full h-full bg-[#330101]">
        <UserDashboardHeader active={active} setActive={setActive} />
        <main className="flex-1 overflow-y-auto"> 
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default UserDashboardLayout
