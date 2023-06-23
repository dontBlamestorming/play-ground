type Props = React.ComponentPropsWithoutRef<"button">;

const SecondaryButton = (props: Props) => {
  const className = `bg-secondary rounded-xLarge text-white px-6 py-2 ${
    props.className ?? ""
  }`;

  return <button {...props} className={className} />;
};

export default SecondaryButton;
