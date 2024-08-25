// src/Matrix.js
import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [boxColors, setBoxColors] = useState(Array(9).fill("white"));

  const handleClick = (index) => {
    if (clickedOrder.length === 9) return; // Ignore clicks if all boxes have been clicked

    const newClickedOrder = [...clickedOrder, index];
    setClickedOrder(newClickedOrder);

    const newBoxColors = [...boxColors];
    newBoxColors[index] = "green";
    setBoxColors(newBoxColors);

    if (newClickedOrder.length === 9) {
      changeAllToOrange(newClickedOrder, newBoxColors);
    }
  };

  const changeAllToOrange = (order, colors) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        const updatedColors = [...colors];
        updatedColors[idx] = "orange";
        setBoxColors(updatedColors);
      }, i * 500); // Change delay as needed
    });
  };

  return (
    <div className="matrix">
      {boxColors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
