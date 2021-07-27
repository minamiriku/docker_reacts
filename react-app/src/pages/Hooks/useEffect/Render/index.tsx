import { useEffect, useState } from "react";
import ExampleLayout from "components/ExampleLayout";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const RENDER_CODE = `
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

const Render = () => {
    const [mount, setMount] = useState(0);
    const [click, setClick] = useState(0);
    const [render, setRender] = useState(0);
  
    useEffect(() => {
      setMount(mount + 1);
    }, []);
  
    useEffect(() => {
      setRender(render + 1);
    }, [click]);
  
    return (
      <div>
        <Box p={1}>
            <Button variant="contained" onClick={() => setClick(click + 1)}>
                Click me
            </Button>
        </Box>
        <Box p={1}>マウント回数: {mount}</Box>
        <Box p={1}>レンダー回数: {render}</Box>
      </div>
    );
  };
  
  export default Render;
  
`;

const Render = () => {
  const [mount, setMount] = useState(0);
  const [click, setClick] = useState(0);
  const [render, setRender] = useState(0);

  useEffect(() => {
    setMount(mount + 1);
  }, []);

  useEffect(() => {
    setRender(render + 1);
  }, [click]);

  return (
    <ExampleLayout title="依存配列入力有無の違い" codeString={RENDER_CODE}>
      <Box p={1}>
        <Button variant="contained" onClick={() => setClick(click + 1)}>
          Click me
        </Button>
      </Box>
      <Box p={1}>マウント回数: {mount}</Box>
      <Box p={1}>レンダー回数: {render}</Box>
    </ExampleLayout>
  );
};

export default Render;
