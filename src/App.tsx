import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AppContainer from "./Components/Common/Containers/AppContainer/AppContainer";
import MainLayout from "./Components/MainLayout";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
      { path: "404", element: <PageNotFound /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return (
    <AppContainer scrollRestore={false}>
      <Navbar />
      {routing}
    </AppContainer>
  );
};

export default App;
