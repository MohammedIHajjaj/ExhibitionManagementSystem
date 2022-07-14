import React, { useState } from "react";

const AddExhibitor = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {};

  return (
    <form className="add" onSubmit={handleSubmit}>
      <h3>إضافة عارض</h3>

      <label>الإسم</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>رقم الهاتف</label>
      <input type="tel" onChange={(e) => setTel(e.target.value)} value={tel} />

      <label>الإيميل</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>الشركة</label>
      <input
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />

      <button className="button add-button">إضافة </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddExhibitor;
