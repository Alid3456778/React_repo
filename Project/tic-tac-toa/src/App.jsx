import React, { useState } from "react";
import Box from "./box";



export default function App() {
  const [sqr, setsqr] = useState(Array(9).fill(null));
  const [quer, setquer] = useState(true);

  

  function setsqure(i)  {
    if (calculateWinner(sqr) || sqr[i]) {
      return;
    }

    const forx = sqr.slice();

    if (quer) {
      forx[i] = "X";
    } else {
      forx[i] = "O";
    }
    setsqr(forx);
    setquer(!quer);
  };

  const winner = calculateWinner(sqr);
  let status;
  if (winner) {
    alert("Winner is " + winner);
    location.reload()
  } else {
    status = "Next player: " + (quer ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="butbut">
        <Box value={sqr[0]} squrex={() => setsqure(0)} />
        <Box value={sqr[1]} squrex={() => setsqure(1)} />
        <Box value={sqr[2]} squrex={() => setsqure(2)} />
      </div>
      <div className="butbut">
        <Box value={sqr[3]} squrex={() => setsqure(3)} />
        <Box value={sqr[4]} squrex={() => setsqure(4)} />
        <Box value={sqr[5]} squrex={() => setsqure(5)} />
      </div>
      <div className="butbut">
        <Box value={sqr[6]} squrex={() => setsqure(6)} />
        <Box value={sqr[7]} squrex={() => setsqure(7)} />
        <Box value={sqr[8]} squrex={() => setsqure(8)} />
      </div>
    </>
  );
};

// export default App;
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}