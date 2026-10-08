import { useState } from "react";
import Icon from "./icon.svg";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}><Icon />count: {count}</button>;
}
