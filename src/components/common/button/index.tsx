import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type DesignType = "primary" | "secondary";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  designType?: DesignType;
}

const Button = ({ designType = "primary", ...props }: Props) => {
  switch (designType) {
    case "secondary":
      return <SecondaryButton {...props} />;
    default:
      return <PrimaryButton {...props} />;
  }
};

export default Button;
