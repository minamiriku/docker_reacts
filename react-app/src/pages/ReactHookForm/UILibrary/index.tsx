import React from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@material-ui/core/Input";

import ExampleLayout from "components/ExampleLayout";

const CODE = `
  import React from "react";
  import Select from "react-select";
  import { useForm, Controller, SubmitHandler } from "react-hook-form";
  import Input from "@material-ui/core/Input";

  interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: { label: string; value: string };
  }
  
  const UILibrary = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
  
    const onSubmit: SubmitHandler<IFormInput> = (data) =>
      alert(JSON.stringify(data));
  
    return (
      <ExampleLayout title="UIライブラリを使用" codeString={CODE}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
          <input type="submit" />
        </form>
      </ExampleLayout>
    );
  };
  
  export default UILibrary;
  
  `;

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const UILibrary = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    alert(JSON.stringify(data));

  return (
    <ExampleLayout title="UIライブラリを使用" codeString={CODE}>
      <p>
        React-Hook-formは非制御コンポーネントとネイティブHTML
        inputをサポートしている。
        <br />
        しかし、UIライブラリと組み合わせて使用することが多いため、ラッパーとしてControllerが使用し組み合わせられるようにしている。
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" />
      </form>
    </ExampleLayout>
  );
};

export default UILibrary;
