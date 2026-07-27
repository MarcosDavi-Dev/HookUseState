import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    setTimeout(() => {
      console.log("2");
      setName("Mudou de novo!");
    }, 0);
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Um Outro nome");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
