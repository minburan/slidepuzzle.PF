import "./styles.css";
import { useState } from "react";

import puzzle1 from "./puzzle1.png";
import puzzle2 from "./puzzle2.png";
import puzzle3 from "./puzzle3.png";
import puzzle4 from "./puzzle4.png";
import puzzle5 from "./puzzle5.png";
import puzzle6 from "./puzzle6.png";
import puzzle7 from "./puzzle7.png";
import puzzle8 from "./puzzle8.png";

function Panel({ value, onClick }) {
  return (
    <td className="tile" onClick={onClick}>
      {value && <img src={value} alt="puzzle picture" />}
    </td>
  );
}

//ランダム要素も入力しときたい
function random(array) {
  for (let i = 0; i < array.length; i++) {
    const rand = Math.floor(Math.random() * 9);
    //i=0から順にランダムな位置と交換
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

export default function Board() {
  //初期配置（☆番号じゃなくて画像を表示させたい）
  //random要素追加
  const [panels, setPanels] = useState(() =>
    random([
      puzzle1,
      puzzle2,
      puzzle3,
      puzzle4,
      puzzle5,
      puzzle6,
      puzzle7,
      puzzle8,
      null,
    ])
  );
  const [count, setCount] = useState(0);

  const handleClick = (index) => {
    const newPanels = [...panels];
    const emptyIndex = newPanels.indexOf(null);

    //valid:有効
    const validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - 3,
      emptyIndex + 3,
    ];

    if (validMoves.includes(index)) {
      newPanels[emptyIndex] = newPanels[index];
      newPanels[index] = null;
      setPanels(newPanels);
      setCount(count + 1);
    }
  };

  return (
    <div>
      <h2>slide puzzle</h2>
      <table className="tile-table">
        <tbody>
          <tr className="tile-row">
            <Panel value={panels[0]} onClick={() => handleClick(0)} />
            <Panel value={panels[1]} onClick={() => handleClick(1)} />
            <Panel value={panels[2]} onClick={() => handleClick(2)} />
          </tr>
          <tr className="tile-row">
            <Panel value={panels[3]} onClick={() => handleClick(3)} />
            <Panel value={panels[4]} onClick={() => handleClick(4)} />
            <Panel value={panels[5]} onClick={() => handleClick(5)} />
          </tr>
          <tr className="tile-row">
            <Panel value={panels[6]} onClick={() => handleClick(6)} />
            <Panel value={panels[7]} onClick={() => handleClick(7)} />
            <Panel value={panels[8]} onClick={() => handleClick(8)} />
          </tr>
        </tbody>
      </table>
      <p>{count} move</p>
    </div>
  );
}
