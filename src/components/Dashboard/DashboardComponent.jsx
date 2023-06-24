import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardComponent() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="hidden sm:basis-[15%] sm:block sm:h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[85%]">
        <Header />
      </div>
    </div>
  );
}

export default DashboardComponent;
