import { blocEntity, setBlocEntity } from "../../BLoC/bloc";
import HeroSection from "./Sections/HeroSection";

const Home = (): JSX.Element => {
  const blocEnt = blocEntity.use();

  // !Reminder: Also it is recommended these
  // actions to build in a component
  // these are just an example to
  // show how can simpler-state be
  // used in a project
  const onUpClick = (): void => {
    const val = blocEnt + 1;
    setBlocEntity(val);
  };

  const onDownClick = (): void => {
    const val = blocEnt - 1;
    setBlocEntity(val);
  };

  return (
    <>
      <HeroSection firstWord="Hero" lastWord="Section" />
      <div className="flex flex-row items-center gap-4">
        <p>Entity: {blocEnt}</p>
        <button
          onClick={onUpClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Up
        </button>
        <button
          onClick={onDownClick}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Down
        </button>
      </div>
    </>
  );
};

export default Home;
