import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContainerProps } from "./AppContainer.type";

const AppContainer = ({
  scrollRestore,
  children,
}: AppContainerProps): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    if (scrollRestore) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>;
};

export default AppContainer;
