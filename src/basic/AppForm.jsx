import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({name: '', email:''});
  const handleChange = (e) => {
    const {name, value} = e.target;
    // 기존의 form에 있는 데이터는 그대로 유지하고, 현재 input이 변경되고 있는 이름의 key에
    // 지금 전달받은 value를 덮어씌워 줄 것이다.
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일: </label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  );
}
