import { FormProvider, useForm } from "react-hook-form";
import Input from "../common/input";
import Button from "../common/button";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
  name: string;
}

const SignInForm = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    return data;
  };

  const [value, setValue] = useState("");

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Input {...methods.register("email")} className="bg-b7" />
        <Input
          className="bg-secondary"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button type="submit">회원가입</Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
