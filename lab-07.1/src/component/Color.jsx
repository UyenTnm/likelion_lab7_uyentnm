import React, { useState } from "react";

function ColorDropdown() {
  const [selectedColor, setSelectedColor] = useState("");

  const Colors = ["Red", "Brown", "White", "Orange"];

  const handleChangeColor = (e) => {
    setSelectedColor(e.target.calue);
  };

  return (
    <div>
      <label>Select a Color:</label>
      <select value={selectedColor} onChange={handleChangeColor}>
        <option value="">--Select--</option>
        {Colors.map((Color, index) => (
          <option key={index} value={Color.toLowerCase()}>
            {Color}
          </option>
        ))}
      </select>

      {selectedColor && <p>You selected: {selectedColor}</p>}
    </div>
  );
}

export default ColorDropdown;
