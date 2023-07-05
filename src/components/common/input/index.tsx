import { forwardRef } from "react";

type Props = React.ComponentPropsWithoutRef<"input">;
type RefType = HTMLInputElement;

const Input = forwardRef<RefType, Props>(function Input(props, ref) {
  const className = `bg-blue-200 rounded-small text-ba border pt-2 pb-2 px-6 py2 w-full ${
    props.className ?? ""
  }`;

  return <input ref={ref} {...props} className={className} />;
});

export default Input;
