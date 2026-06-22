import { useState } from "react";

const HookUseState = () => {
  // 1 -
  let userName = "João";
  const [name, setName] = useState("Marcos");

  const ChangeName = () => {
    userName = "João da Silva";

    setName("Marcos Davi");
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={ChangeName}> Mudar nome</button>
    </div>
  );
};

export default HookUseState;
