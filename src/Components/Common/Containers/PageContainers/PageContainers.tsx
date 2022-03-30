//TODO: create a section container to use outer and inner together
//TODO: change div to section with role logic
export const OuterContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className={`w-full ${className ? className : "mt-32"}`} {...props}>
    {props.children}
  </div>
);

export const InnerContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className={`w-[90%] mx-auto ${className ? className : ""}`} {...props}>
    {props.children}
  </div>
);
