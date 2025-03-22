import React, { useState } from 'react';

const BooksPage = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (num2 === '0') {
      alert('ไม่สามารถหารด้วยศูนย์');
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div>
      <h1>เครื่องคิดเลข</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="กรอกเลขที่ 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="กรอกเลขที่ 2"
      />
      <button onClick={handleAdd}>บวก</button>
      <button onClick={handleSubtract}>ลบ</button>
      <button onClick={handleMultiply}>คูณ</button>
      <button onClick={handleDivide}>หาร</button>
      <h2>ผลลัพธ์: {result}</h2>
    </div>
  );
};

export default BooksPage;

