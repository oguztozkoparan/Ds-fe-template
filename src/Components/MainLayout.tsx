import * as React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainLayout;
