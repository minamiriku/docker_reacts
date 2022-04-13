import { useEffect, useState } from "react";
import ExampleLayout from "components/ExampleLayout";

const TIMER_CODE = `
import { useEffect, useState } from "react";

const Timer = () => {
    const [time, updateTime] = useState(Date.now());
  
    useEffect(() => {
      const timeoutId = setTimeout(() => updateTime(Date.now()), 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [time]);
  
    return <div>{time}</div>;
};
  
export default Timer;

`;

const Timer = () => {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => updateTime(Date.now()), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return (
    <ExampleLayout title="クリーンアップ - Timer" codeString={TIMER_CODE}>
      {time}
    </ExampleLayout>
  );
};

export default Timer;
