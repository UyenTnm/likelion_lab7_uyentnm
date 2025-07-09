import React, { useState } from "react";

function CarDropdown() {
  const [selectedCar, setSelectedCar] = useState("");
  const Cars = ["Mercedes", "BMW", "Audi", "Honda", "Toyota"];

  const handleChange = (e) => {
    setSelectedCar(e.target.value);
  };

  return (
    <div>
      <label>Select a Car: </label>
      <select value={selectedCar} onChange={handleChange}>
        <option value="">-- Select --</option>
        {Cars.map((Car, index) => (
          <option key={index} value={Car.toLowerCase()}>
            {Car}
          </option>
        ))}
      </select>

      {/* {selectedCar && <p>You selected: {selectedCar}</p>} */}
    </div>
  );
}

export default CarDropdown;
