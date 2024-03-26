import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "코비",
    title: "족발자",
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
    ],
  });
  return (
    <div className="container mentor">
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor, i) => {
              console.log(mentor.name);
              console.log(i);
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={() => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        setPerson((person)=> ({
            ...person,
            mentors: [...person.mentors, {name, title}],
            // spread 연산자를 배열에 이용하면 배열의 아이템들이 하나하나씩 낱개로 풀어진다.
        }))
      }}>
        멘토 추가하기
      </button>
      <button onClick={() => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        setPerson((person)=> ({
            ...person, mentors: person.mentors.filter(m => m.name !== name),
            // 우리가 입력받은 이름이 멘토가 아닌 것들만 멘토로 필터링해서 지정해줌
        }))
      }}>
        멘토 삭제하기
      </button>
    </div>
  );
}
