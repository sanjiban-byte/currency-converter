import React, { useState } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');
  const [converted, setConverted] = useState('');

  const conversionRates = {
    INR: { USD: 0.012, INR: 1 },
    USD: { INR: 83.2, USD: 1 },
  };

  const convertCurrency = (value, fromCurrency, toCurrency) => {
    return value * conversionRates[fromCurrency][toCurrency];
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      setConverted('Please enter a valid amount.');
    } else {
      const result = convertCurrency(amt, from, to);
      setConverted(`${amt} ${from} = ${result.toFixed(2)} ${to}`);
    }
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleConvert}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />

        <div className="dropdown">
          <div className="select-container">
            <img src="https://flagcdn.com/48x36/in.png" alt="INR" />
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>

          <i className="fas fa-exchange-alt"></i>

          <div className="select-container">
            <img src="https://flagcdn.com/48x36/us.png" alt="USD" />
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        <div className="msg">{converted || 'Converted amount will appear here'}</div>

        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
