import { Link } from "react-router-dom";
import { FlexContainer } from "../Common/Containers/FlexContainers/FlexContainers";
import { InnerContainer } from "../Common/Containers/PageContainers/PageContainers";

const Navbar = (): JSX.Element => {
  return (
    <nav className="shadow-lg py-4">
      <InnerContainer>
        <FlexContainer className="flex-row justify-between items-center">
          <p>logo</p>
          <FlexContainer className="flex-row justify-center items-center gap-8">
            <Link to="/">Home</Link>
            <a href="https://github.com/oguztozkoparan/trt-boilerplate">
              Github
            </a>
          </FlexContainer>
        </FlexContainer>
      </InnerContainer>
    </nav>
  );
};

export default Navbar;
