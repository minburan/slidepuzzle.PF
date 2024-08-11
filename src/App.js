import "./styles.css";
import { useState } from "react";

function Panel({ value, onClick }) {
  return (
    <td className="tile" onClick={onClick}>
      {value}
    </td>
  );
}

export default function Board() {
  //初期配置（☆番号じゃなくて画像を表示させたい）
  const [panels, setPanels] = useState([1, 2, 3, 4, 5, 6, 7, 8, null]);
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
      <h2>slide pazzle</h2>
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
