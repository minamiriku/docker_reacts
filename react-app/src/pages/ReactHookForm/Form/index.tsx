import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import ExampleLayout from "components/ExampleLayout";

const CODE = `
  import React from "react";
  import { useForm, SubmitHandler } from "react-hook-form";
  
  //MEMO: form用の型を定義
  type Inputs = {
    example: string;
    exampleRequired: string;
  };

  const Form = () => {
    const {
      register, // 入力値の登録時に使用
      handleSubmit, // formタグでのonSubmit時に使用
      watch, // フォームの値を監視する
      formState: { errors }, //errorsはエラー
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = (data) =>
      //MEMO: 書き換えが必要
      alert(
        example: data.example, exampleRequired: data.exampleRequired
      );
  
    return (
      <ExampleLayout title="基本的な使用法" codeString={CODE}>
        <div>

          //MEMO: watchでexampleの値を監視している
          <span>1つ目のinputの値: {watch("example")}</span>
  
          //MEMO: handleSubmitでonSubmit（submit時の処理）を呼び出す
          <form onSubmit={handleSubmit(onSubmit)}>
            //MEMO: registerでexampleの値を登録
            <input defaultValue="test" {...register("example")} />
            
            //MEMO: registerでexampleRequiredの値を登録、
                    {required: true}で空白であれば、errors.exampleRequiredをtrueにする
            <input {...register("exampleRequired", { required: true })} />

            // errors.exampleRequiredであれば文言を表示
            {errors.exampleRequired && <span>このフィールドは必須です</span>}
  
            <input type="submit" />
          </form>
        </div>
      </ExampleLayout>
    );
  };
  
  export default Form;
  `;

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(
      `example: ${data.example} , exampleRequired: ${data.exampleRequired}`
    );

  return (
    <ExampleLayout title="基本的な使用法" codeString={CODE}>
      <div>
        <span>1つ目のinputの値: {watch("example")}</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />

          {errors.exampleRequired && <span>このフィールドは必須です</span>}

          <input type="submit" />
        </form>
      </div>
    </ExampleLayout>
  );
};

export default Form;
