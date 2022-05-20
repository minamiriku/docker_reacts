import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

import ExampleLayout from "components/ExampleLayout";

const CODE = `
  import React from "react";
  import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
  
  interface IFormValues {
    "First Name": string;
    Age: number;
  }
  
  type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
  };
  
  const Input = ({ label, register, required }: InputProps) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
  
  const Select = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormValues>>
  >(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));
  
  const AlreadyForm = () => {
    const { register, handleSubmit } = useForm<IFormValues>();
  
    const onSubmit: SubmitHandler<IFormValues> = (data) =>
      alert(JSON.stringify(data));
  
    return (
      <ExampleLayout title="既存のフォームに適用" codeString={CODE}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="First Name" register={register} required />
          <Select label="Age" {...register("Age")} />
          <input type="submit" />
        </form>
      </ExampleLayout>
    );
  };
  
  export default AlreadyForm;
  
  `;

interface IFormValues {
  "First Name": string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const AlreadyForm = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <ExampleLayout title="既存のフォームに適用" codeString={CODE}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <Select label="Age" {...register("Age")} />
        <input type="submit" />
      </form>
    </ExampleLayout>
  );
};

export default AlreadyForm;
