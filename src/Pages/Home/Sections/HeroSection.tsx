interface Props {
  firstWord: string;
  lastWord: string;
  number?: number;
}

const HeroSection = (props: Props): JSX.Element => {
  return (
    <>
      <section>
        <h1 className="text-4xl">
          {props.firstWord} {props.lastWord} {props.number}
        </h1>
      </section>
    </>
  );
};

export default HeroSection;
