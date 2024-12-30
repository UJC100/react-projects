import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

    function randomNumber(length) {
        const randomIndex = Math.floor(Math.random() * length);
        return randomIndex
    }
  function handleColorChange() {
    if (typeOfColor === "hex") {
      const hex = "0123456789ABCDEF";
      let generatedHex = "#";
      for (let i = 0; i < 6; i++) {
        generatedHex += hex[randomNumber(hex.length)];
      }
      setColor(generatedHex);
    } else {
        const r = randomNumber(256) 
        const g = randomNumber(256) 
        const b = randomNumber(256) 
        setColor(`rgb(${r}, ${g}, ${b})`)
    }
    }
    
    useEffect(() => {
        handleColorChange()
    }, [typeOfColor])

  return (
    <div
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>create RGB color</button>
      <button onClick={handleColorChange}>Generate random color</button>

      <div
        style={{
          color: "white",
          marginTop: "200px",
        }}
          >
              <h1>{typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color' }</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
