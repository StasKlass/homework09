import React, { useState } from "react";

const Homework09: React.FC = () => {
  const [input1, setInput1] = useState(""); // состояние для первого инпута
  const [input2, setInput2] = useState(""); // состояние для второго инпута

  // Функция обработки изменения первого инпута
  const handleInput1Change = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput1(value);

    // Отправляем запрос на URL
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) throw new Error("Ошибка сети");
      const data = await response.json();
      console.log("Данные с API:", data);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  // Функция обработки изменения второго инпута
  const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  return (
    <div>
      <h1>Homework 09</h1>
      <div>
        <label>
          Input 1: 
          <input type="text" value={input1} onChange={handleInput1Change} />
        </label>
      </div>
      <div>
        <label>
          Input 2: 
          <input type="text" value={input2} onChange={handleInput2Change} />
        </label>
      </div>
    </div>
  );
};

export default Homework09;
