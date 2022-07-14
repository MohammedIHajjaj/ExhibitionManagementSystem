import React, { useState } from "react";

const AddVisitor = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const visitor = { name, tel, email };

    const response = await fetch("/api/visitors", {
      method: "POST",
      body: JSON.stringify(visitor),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      setError(json.error);
    } else {
      setName("");
      setTel("");
      setEmail("");
      setError(null);
    }
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <h3>إضافة زائر</h3>

      <label>الإسم</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>رقم الهاتف</label>
      <input
        type="number"
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />

      <label>الإيميل</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <p>
        {" "}
        {name} , {tel} , {email}{" "}
      </p>

      <button className="button add-button">إضافة </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddVisitor;
