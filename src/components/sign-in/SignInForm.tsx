import { FormProvider, useForm } from "react-hook-form";
import Input from "../common/input";

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

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Input />
      </form>
    </FormProvider>
  );
};

export default SignInForm;
