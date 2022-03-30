// TODO: make this flex container easy to use!
export const FlexContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className={`flex ${className ? className : ""}`} {...props}>
    {props.children}
  </div>
);
