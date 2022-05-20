import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import ExampleLayout from "components/ExampleLayout";

const CODE = `
  import React from "react";
  import { useForm, SubmitHandler } from "react-hook-form";
  
  interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  const Validation = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
  
    const onSubmit: SubmitHandler<IFormInput> = (data) =>
      alert(
        firstName: data.firstName , lastName: data.lastName , age: data.age
      );

    return (
      <ExampleLayout title="サポートされているバリデーション" codeString={CODE}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </ExampleLayout>
    );
  };
  
  export default Validation;
  `;

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Validation = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    alert(
      `firstName: ${data.firstName} , lastName: ${data.lastName} , age: ${data.age}`
    );

  const supportedValidation = [
    "required",
    "min",
    "max",
    "minLength",
    "maxLength",
    "pattern",
    "validate",
  ];

  return (
    <ExampleLayout title="サポートされているバリデーション" codeString={CODE}>
      <>
        <ul>
          {supportedValidation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </>
    </ExampleLayout>
  );
};

export default Validation;
