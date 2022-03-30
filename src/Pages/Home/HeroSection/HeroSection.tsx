import { FlexContainer } from "../../../Components/Common/Containers/FlexContainers/FlexContainers";
import {
  InnerContainer,
  OuterContainer,
} from "../../../Components/Common/Containers/PageContainers/PageContainers";
import CounterDemo from "../../../Components/Home/CounterDemo";
import { HeroSectionProps } from "./HeroSection.types";

const HeroSection = (props: HeroSectionProps): JSX.Element => {
  return (
    <OuterContainer>
      <InnerContainer>
        <FlexContainer className="flex-col gap-8">
          <h1 className="text-4xl">
            {props.firstWord} {props.lastWord} {props.number}
          </h1>
          <CounterDemo />
        </FlexContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default HeroSection;
