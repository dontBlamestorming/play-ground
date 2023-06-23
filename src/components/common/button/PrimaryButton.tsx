type Props = React.ComponentPropsWithoutRef<"button">;

const PrimaryButton = (props: Props) => {
  const className = `bg-primary rounded-xLarge text-white px-6 py-2 ${
    props.className ?? ""
  }`;

  return <button {...props} className={className} />;
};

export default PrimaryButton;
