import * as React from "react";

interface ICounter {
  count?: number;
}

// just to play around a bit!
export const Counter: React.FunctionComponent<ICounter> = ({ count = 0 }) => {
  const [clicks, setClicks] = React.useState(count);
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};
