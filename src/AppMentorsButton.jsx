import React, { useReducer, useMemo, useCallback, memo } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, [])

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  }, [])

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  }, [])

  return (
    <div className="container mentor">
      <h1>
        {person.name}는 {person.title}
      </h1>
      <article>😍😍😍 Performance test 😍😍😍</article>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
      <Button text="삭제하기" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
    console.log("Button", text, "re-rendering 😃");
    const result = useMemo(()=> calculateSomething(), [])
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
          margin: "0.4rem",
        }}
      >
        {`${text} ${result}`}
      </button>
    );
  })

function calculateSomething() {
    // for (let i=0; i<10000; i++) {
    //     console.log('😍');

    // }
    for (let i=0; i<10; i++) {
        console.log('😍');

    }
    return 10;
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
      name: "턱비",
      title: "턱시도 신사",
    },
  ],
};
