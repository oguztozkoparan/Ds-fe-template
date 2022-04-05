import {
  counterEntity,
  setCounterEntity,
} from "../../BLoC/hero.bloc/counter.bloc";
import { FlexContainer } from "../Common/Containers/FlexContainers/FlexContainers";

const CounterDemo = (): JSX.Element => {
  const counter = counterEntity.use();

  // !Reminder: It is recommended these
  // actions to build in a component
  // these are just an example to
  // show how can simpler-state be
  // used in a project
  const handleUpClick = (): void => {
    const val = counter + 1;
    setCounterEntity(val);
  };

  const handleDownClick = (): void => {
    const val = counter - 1;
    setCounterEntity(val);
  };

  return (
    <FlexContainer className="flex-row items-center gap-4">
      <p>Entity: {counter}</p>
      <button
        onClick={handleUpClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Up
      </button>
      <button
        onClick={handleDownClick}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Down
      </button>
    </FlexContainer>
  );
};

export default CounterDemo;
