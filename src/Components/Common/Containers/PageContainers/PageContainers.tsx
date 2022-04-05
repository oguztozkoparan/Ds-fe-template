//TODO: change div to section with role logic
export const FullContainer = ({
  outerProps,
  innerProps,
  children,
}: {
  outerProps?: React.HTMLAttributes<HTMLDivElement>;
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
}) => (
  <OuterContainer {...outerProps}>
    <InnerContainer {...innerProps}>{children}</InnerContainer>
  </OuterContainer>
);

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
