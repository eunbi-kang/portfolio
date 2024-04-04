import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
      <Avatar
        image="https://avatars.githubusercontent.com/u/87633110?v=4"
        name="Bob"
        size={200}
      />
      <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>저는 개발자 족발자 입니다!</p>
      </Navbar>
      <Navbar>
        <p>호잇!호잇1!호잇!!!</p>
      </Navbar>
    </div>
  );
}

function Navbar({children}) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
