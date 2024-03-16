import React , { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [x, setX] = useState(0); // 처음 x 좌표를 0으로 설정해준다.
  const [y, setY] = useState(0); // 처음 y 좌표를 0으로 설정해준다.
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY); // 변경될 때 마다 상태가 업데이트 된다.
      }}
    >
      <div className="pointer" style={{transform:`translate(${x}px, ${y}px)`}}/>
    </div>
  );
}
