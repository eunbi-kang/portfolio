import React, { useState } from "react";
import './index.css';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "코비",
    title: "족발자",
    mentor: {
      name: "은비",
      title: "시니어족발자",
    },
  });
  console.log(person);
  return (
    <div className='container mentor'>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({...person, mentor:{...person.mentor, name}}))
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({...person, mentor:{...person.mentor, title}}))
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
