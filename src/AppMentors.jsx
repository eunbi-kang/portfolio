import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () =>{
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current})
  }
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({type: 'added', name, title})
  }
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({type: 'deleted', name})
  }
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
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleAdd}>
        멘토 추가하기
      </button>
      <button onClick={handleDelete}>
        멘토 삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
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
  }