import React from "react";
import { useImmer } from 'use-immer';

export default function AppmentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // updatePerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if (mentor.name === prev) {
    //       return { ...mentor, name: current };
    //     }
    //     return mentor;
    //   }),
    // }));
    updatePerson((person)=> {
      const mentor = person.mentors.find(m => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // updatePerson((person) => ({
    //   ...person,
    //   mentors: [...person.mentors, { name, title }],
    // }));
    updatePerson((person) => {person.mentors.push({name, title})});
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    // updatePerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((m) => m.name !== name),
    // }));
    updatePerson((person)=> {
      const index = person.mentors.findIndex(m=> m.name === name);
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div className="container mentor">
      <h1>
        {person.name}는 {person.title}
      </h1>
      <article>😍 Immer test</article>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "코비",
  title: "개발자",
  mentors: [
    {
      name: "비야",
      title: "주니어족발자",
    },
    {
      name: "호야",
      title: "시니어족발자",
    },
    {
      name: "코비",
      title: "강아지",
    },
    {
      name: "먼비",
      title: "고양이",
    },
    {
      name: "턱비턱턱",
      title: "턱시도 신사",
    }
  ],
};
