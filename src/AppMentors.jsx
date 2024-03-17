import React, {useState} from 'react'

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '코비',
        title: '족발자',
        temp: {
            name: 'temp1'
        },
        mentors: [
            {
                name:'비야',
                title:'주니어족발자'
            },
            {
                name: '호야',
                title: '시니어족발자'
            },
            {
                name: '코비',
                title: '강아지'
            }
        ],
    })
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
        <button onClick={()=> {
            const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
            const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
            console.log(person.mentors.length);
            setPerson((person) => ({...person, mentors: person.mentors.map((mentor, i) => {
                console.log(mentor.name);
                console.log(i);
                if(mentor.name === prev) {
                    return { ...mentor,name:current};
                }
                return mentor;
            }),
        }));
           
        }}>
            멘토의 이름을 바꾸기
        </button>

    </div>
  )
}
